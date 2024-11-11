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

  const initialState = { play: false, pause: false, stop: false };
  const preparedState = { play: true, pause: false, stop: false };
  const playingState = { play: false, pause: true, stop: true };
  const pausedState = { play: true, pause: false, stop: true };

  const [enabledButtons, setEnabledButtons] = useState(initialState);

  // Create a single supabase client for interacting with your database
  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    const { data, error } = supabase.storage
      .from("audio")
      .getPublicUrl(chapterAudio);

      error && console.log(error);
      
    SetAudio(data.publicUrl);

    chapterAudio && activateKeepAwakeAsync();

    sound.setOnPlaybackStatusUpdate(UpdateAudio);

    return switchKeepAwakeOff;
  }, [chapterAudio]);

  const switchKeepAwakeOff = () => {
    try {
      deactivateKeepAwake();
    } catch (error) {
      console.error(error);
    }
  };

  const SetAudio = (soundUri) => {
    try {
      UnloadAudio();
      LoadAudio(soundUri).then(() => setEnabledButtons(preparedState));
    } catch (error) {
      console.error(error);
    }
  };

  const LoadAudio = async (uri) => await sound.loadAsync({ uri }, {}, true);

  const PlayAudio = () => {
    try {
      sound.playAsync();
      setEnabledButtons(playingState);
    } catch (error) {
      console.error(error);
    }
  };

  const PauseAudio = async () => {
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

  const StopAudio = async () => {
    const audioStatus = await sound.getStatusAsync();

    try {
      if (audioStatus.isLoaded) {
        PauseAudio().then(() => setEnabledButtons(preparedState));
        await sound.setPositionAsync(0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const UnloadAudio = async () => {
    try {
      await sound.unloadAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const UpdateAudio = (playbackStatus) => {
    playbackStatus.didJustFinish && SetAudio(); // replay audio and highlight icons
  };

  return (
    <View style={Styles.buttons}>
      <RoundButton
        name="play"
        onPress={PlayAudio}
        enabled={enabledButtons.play}
      />
      <RoundButton
        name="pause"
        onPress={PauseAudio}
        enabled={enabledButtons.pause}
      />
      <RoundButton
        name="stop"
        onPress={StopAudio}
        enabled={enabledButtons.stop}
      />
    </View>
  );
}
