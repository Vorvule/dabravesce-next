import { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';

import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';

import { createClient } from '@supabase/supabase-js';

import Device from '@/functions/Device';
import RoundButton from '@/components/RoundButton';
import Styles from '@/constants/styles/common.styles';
import { BUTTON_STATE } from '@/constants/audio.button.states';

export default function ChapterAudio({ chapterAudio }) {
  const supabase = useMemo(() => {
    const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

    return createClient(supabaseUrl, supabaseKey);
  }, []);

  const [audioSource, setAudioSource] = useState(null);
  const [buttons, setButtons] = useState(BUTTON_STATE.STOPPED);

  const player = useAudioPlayer(audioSource);
  const status = useAudioPlayerStatus(player);
  // console.log('Audio source', player.audioSource);
  // console.log('Player duration', player.duration);
  // console.log('Player current time', player.currentTime);
  // console.log('Player buffering', player.isBuffering);
  // console.log('Player loaded', player.isLoaded);
  // console.log('Player paused', player.paused);
  // console.log('Player rate', player.playbackRate);
  // console.log('Player volume', player.volume);

  const platformIsNative = useMemo(() => {
    return !Device.platformIsWeb();
  }, []);

  const audioUrl = useMemo(() => {
    return supabase.storage.from('audio').getPublicUrl(chapterAudio).data
      .publicUrl;
  }, [chapterAudio, supabase]);

  const playAudio = async () => {
    if (player.paused) {
      player.play();
      setButtons(BUTTON_STATE.PLAYING);
      platformIsNative && (await activateKeepAwakeAsync());
    }
  };

  const pauseAudio = async () => {
    if (status.playing) {
      player.pause();
      setButtons(BUTTON_STATE.PAUSED);
      platformIsNative && (await deactivateKeepAwake());
    }
  };

  const stopAudio = useCallback(async () => {
    if (player.currentTime > 0) {
      player.pause();
      await player.seekTo(0);
      setButtons(BUTTON_STATE.STOPPED);
      platformIsNative && (await deactivateKeepAwake());
    }
  }, [platformIsNative, player]);

  useEffect(() => {
    status.didJustFinish && stopAudio();
  }, [player.playing, status.didJustFinish, stopAudio]);

  useEffect(() => {
    stopAudio().then(() => {
      setAudioSource(audioUrl);
    });
  }, [audioUrl, stopAudio]);

  return (
    <View style={Styles.buttons}>
      <RoundButton name='play' onPress={playAudio} enabled={buttons.play} />
      <RoundButton name='pause' onPress={pauseAudio} enabled={buttons.pause} />
      <RoundButton name='stop' onPress={stopAudio} enabled={buttons.stop} />
    </View>
  );
}
