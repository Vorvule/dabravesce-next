import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';

import { createClient } from '@supabase/supabase-js';

import Device from '@/functions/Device';
import RoundButton from '@/components/RoundButton';
import Styles from '@/constants/styles/common.styles';

export default function ChapterAudio({ chapterAudio }) {
  const platformIsNative = !Device.platformIsWeb();

  const stoppedState = { play: true, pause: false, stop: false };
  const playingState = { play: false, pause: true, stop: true };
  const pausedState = { play: true, pause: false, stop: true };

  const [enabledButtons, setEnabledButtons] = useState(stoppedState);

  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  const [audioSource, setAudioSource] = useState(null);

  const player = useAudioPlayer(audioSource);
   // console.log('Audio source', audioSource);
   // console.log('Player duration', player.duration);
   // console.log('Player current time', player.currentTime);
   // console.log('Player buffering', player.isBuffering);
   // console.log('Player loaded', player.isLoaded);
   // console.log('Player paused', player.paused);
   // console.log('Player rate', player.playbackRate);
   // console.log('Player playing', player.playing);
   // console.log('Player volume', player.volume);

  // const handlePlaybackStatus = useCallback((status) => {
  //   if (status.didJustFinish) {
  //     console.log('Аудио завершилось');
  //     setEnabledButtons(stoppedState);
  //   }
  // });

  // const status = useAudioPlayerStatus(player);
  // handlePlaybackStatus(status);

  useEffect(() => {
    const { data } = supabase.storage.from('audio').getPublicUrl(chapterAudio);
    setAudioSource(data.publicUrl);
  }, [chapterAudio]);

  const playAudio = async () => {
    player.play();
    setEnabledButtons(playingState);

    player.playbackRate = 2;
    platformIsNative && (await activateKeepAwakeAsync());
  };

  const pauseAudio = async () => {
    player.pause();
    setEnabledButtons(pausedState);
    platformIsNative && (await deactivateKeepAwake());
  };

  const stopAudio = async () => {
    player.pause();
    await player.seekTo(0);
    setEnabledButtons(stoppedState);
    platformIsNative && (await deactivateKeepAwake());
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
