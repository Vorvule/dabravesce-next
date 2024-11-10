// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio

import { useEffect, useState } from "react";
import { View } from "react-native";

import { Audio } from "expo-av";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";

import RoundButton from "@/components/RoundButton";

import Styles from "@/constants/Styles";
import Uris from "@/constants/Uris";

export default function ChapterAudio({ chapterAudio }) {
  const [sound, _] = useState(new Audio.Sound());

  const initialState = { play: false, pause: false, stop: false };
  const preparedState = { play: true, pause: false, stop: false };
  const playingState = { play: false, pause: true, stop: true };
  const pausedState = { play: true, pause: false, stop: true };
  const [enabledButtons, setEnabledButtons] = useState(initialState);

  useEffect(() => {
    SetAudio();

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

  const SetAudio = () => {
    try {
      UnloadAudio();
      LoadAudio().then(() => setEnabledButtons(preparedState));
    } catch (error) {
      console.error(error);
    }
  };

  const LoadAudio = async () => {
    await sound.loadAsync({ uri: Uris.supabaseUri + chapterAudio }, {}, true);
  };

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
    playbackStatus.didJustFinish && SetAudio(); // to replay audio and highlight icons
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
