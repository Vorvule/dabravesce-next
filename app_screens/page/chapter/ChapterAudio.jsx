// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio

import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Audio } from 'expo-av';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';

import { createClient } from '@supabase/supabase-js';

import Device from '@/functions/Device';
import RoundButton from '@/components/RoundButton';
import Styles from '@/constants/styles/common.styles';

export default function ChapterAudio({ chapterAudio }) {
  const [sound, _] = useState(new Audio.Sound());

  const platformIsNative = !Device.platformIsWeb();

  const bareState = { play: false, pause: false, stop: false };
  const stoppedState = { play: true, pause: false, stop: false };
  const playingState = { play: false, pause: true, stop: true };
  const pausedState = { play: true, pause: false, stop: true };

  const [enabledButtons, setEnabledButtons] = useState(bareState);

  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    const { data } = supabase.storage.from('audio').getPublicUrl(chapterAudio);

    addAudio(data.publicUrl);
    sound.setOnPlaybackStatusUpdate(updateAudio);

    return undoAudio;
  }, [chapterAudio]);

  const addAudio = async (publicUrl) => {
    await sound.unloadAsync();
    await sound.loadAsync({ uri: publicUrl }, {}, true);
    setEnabledButtons(stoppedState);
  };

  const playAudio = async () => {
    const audioStatus = await sound.getStatusAsync();

    if (audioStatus.isLoaded) {
      await sound.playAsync();
      setEnabledButtons(playingState);
      platformIsNative && activateKeepAwakeAsync();
    }
  };

  const pauseAudio = async () => {
    const audioStatus = await sound.getStatusAsync();

    if (audioStatus.isLoaded && audioStatus.isPlaying) {
      sound.pauseAsync();
      setEnabledButtons(pausedState);
      platformIsNative && deactivateKeepAwake();
    }
  };

  const stopAudio = async () => {
    const audioStatus = await sound.getStatusAsync();

    if (sound._loaded && audioStatus.isLoaded) {
      sound.pauseAsync();
      sound.setPositionAsync(0);
      setEnabledButtons(stoppedState);

      platformIsNative && deactivateKeepAwake();
    }
  };

  const updateAudio = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      stopAudio();
    }
  };

  const undoAudio = () => {
    stopAudio();
    platformIsNative && deactivateKeepAwake();
    setEnabledButtons(bareState);
  };

  return (
    <View style={Styles.buttons}>
      <RoundButton
        name='play'
        onPress={playAudio}
        enabled={enabledButtons.play}
      />
      <RoundButton
        name='pause'
        onPress={pauseAudio}
        enabled={enabledButtons.pause}
      />
      <RoundButton
        name='stop'
        onPress={stopAudio}
        enabled={enabledButtons.stop}
      />
    </View>
  );
}
