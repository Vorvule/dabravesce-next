// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio

import { useEffect, useState } from "react";
import { View } from "react-native";

import { Audio } from "expo-av";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";

import { createClient } from "@supabase/supabase-js";
import RoundButton from "@/components/RoundButton";

import Styles from "@/constants/Styles";

export default function ChapterAudio({ chapterAudio }) {
  const [sound, _] = useState(new Audio.Sound());

  const bareState = { play: false, pause: false, stop: false };
  const stoppedState = { play: true, pause: false, stop: false };
  const playingState = { play: false, pause: true, stop: true };
  const pausedState = { play: true, pause: false, stop: true };

  const [enabledButtons, setEnabledButtons] = useState(bareState);

  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    const { data } = supabase.storage
      .from("audio")
      .getPublicUrl(chapterAudio);

    setupAudio(data.publicUrl);
    chapterAudio && activateKeepAwakeAsync();
    sound.setOnPlaybackStatusUpdate(updateAudio);

    return switchKeepAwakeOff;
  }, [chapterAudio]);

  const switchKeepAwakeOff = () => {
    try {
      deactivateKeepAwake();
    } catch (error) {
      console.error(error);
    }
  };

  const setupAudio = async (publicUrl) => {
    try {
      await sound.unloadAsync();
      await sound.loadAsync({ uri: publicUrl }, {}, true)
      setEnabledButtons(stoppedState);
    } catch (error) {
      console.error(error);
    }
  };

  const playAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();

      if (audioStatus.isLoaded) {
        await sound.playAsync();
        setEnabledButtons(playingState);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pauseAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();

      if (audioStatus.isLoaded && audioStatus.isPlaying) {
        sound.pauseAsync();
        setEnabledButtons(pausedState);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const stopAudio = async () => {
    const audioStatus = await sound.getStatusAsync();

    try {
      if (audioStatus.isLoaded) {
        sound.pauseAsync();
        sound.setPositionAsync(0);
        setEnabledButtons(stoppedState);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateAudio = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      stopAudio();
      // switchKeepAwakeOff();
    }
  };

  return (
    <View style={Styles.buttons}>
      <RoundButton
        name="play"
        onPress={playAudio}
        enabled={enabledButtons.play}
      />
      <RoundButton
        name="pause"
        onPress={pauseAudio}
        enabled={enabledButtons.pause}
      />
      <RoundButton
        name="stop"
        onPress={stopAudio}
        enabled={enabledButtons.stop}
      />
    </View>
  );
}
