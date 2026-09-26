import { useCallback, useEffect, useMemo, useRef } from 'react';
import { View } from 'react-native';

import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';

import { createClient } from '@supabase/supabase-js';
import RoundButton from '@/components/round.button';
import Styles from '@/constants/styles/common.styles';
import { BUTTON_STATES } from '@/constants/audio/button.states.js';

export default function ChapterAudio({ chapterAudio }) {
  const supabase = useMemo(() => {
    const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

    return createClient(supabaseUrl, supabaseKey);
  }, []);

  const audioUrl = useMemo(() => {
    return supabase
      .storage
      .from('audio')
      .getPublicUrl(chapterAudio)
      .data
      .publicUrl;
  }, [chapterAudio, supabase]);

  const player = useAudioPlayer(audioUrl);
  const status = useAudioPlayerStatus(player);
  // console.log('Audio source', player.audioSource);
  // console.log('Player duration', player.duration);
  // console.log('Player current time', player.currentTime);
  // console.log('Player buffering', player.isBuffering);
  // console.log('Player loaded', player.isLoaded);
  // console.log('Player paused', player.paused);
  // console.log('Player rate', player.playbackRate);
  // console.log('Player volume', player.volume);

  let buttons = BUTTON_STATES.STOPPED;

  if (status.playing) {
    buttons = BUTTON_STATES.PLAYING;
  } else if (status.currentTime > 0) {
    buttons = BUTTON_STATES.PAUSED;
  }

  const isAwake = useRef(false);

  const acquireKeepAwake = useCallback(async () => {
    if (isAwake.current) {
      return;
    }

    await activateKeepAwakeAsync();
    isAwake.current = true;
  }, []);

  const releaseKeepAwake = useCallback(async () => {
    if (!isAwake.current) {
      return;
    }

    await deactivateKeepAwake();
    isAwake.current = false;
  }, []);

  const playAudio = async () => {
    if (player.paused) {
      player.play();
      await acquireKeepAwake();
    }
  };

  const pauseAudio = async () => {
    if (status.playing) {
      player.pause();
      await releaseKeepAwake();
    }
  };

  const stopAudio = useCallback(async () => {
    if (player.currentTime > 0) {
      player.pause();
      await player.seekTo(0);
      await releaseKeepAwake();
    }
  }, [player, releaseKeepAwake]);

  useEffect(() => {
    status.didJustFinish && stopAudio();
  }, [status.didJustFinish, stopAudio]);

  useEffect(() => {
    releaseKeepAwake();
  }, [audioUrl, releaseKeepAwake]);

  return (
    <View style={Styles.buttons}>
      <RoundButton name="play" onPress={playAudio} enabled={buttons.play} />
      <RoundButton name="pause" onPress={pauseAudio} enabled={buttons.pause} />
      <RoundButton name="stop" onPress={stopAudio} enabled={buttons.stop} />
    </View>
  );
}
