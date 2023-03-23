// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

import { Audio } from "expo-av";
import KeepAwake from "expo-keep-awake";

import AudioTouchable from "./AudioTouchable";
import { styles } from "../../constants/styles";

export default function ChapterAudio({ chapterAudio }) {
  const [active, setActive] = useState(false);

  const LoadAudio = async () => {
    const sound = new Audio.Sound();

    try {
      await sound.loadAsync(require("../../assets/audio/luke/15.mp3"));
      await sound.playAsync();
      console.log("Playing Sound");

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      // await sound.unloadAsync();
    } catch (error) {
      console.error(error);
    }

    const path = "./assets" + chapterAudio;
    console.log(path);

    // const { sound } = await Audio.Sound.createAsync(assets);
    // setSound(sound);

    // await sound.playAsync();

    // try {
    //   UnloadAudio();

    //   await audio.loadAsync(require("./assets/audio" + chapterAudio));

    //   setActive(true);
    //   audio.setOnPlaybackStatusUpdate(UpdateAudio);
    // } catch (e) {}
  };

  const PlayAudio = async () => {
    try {
      const audioStatus = await audio.getStatusAsync();

      if (audioStatus.isLoaded && !audioStatus.isPlaying) {
        audio.playAsync();

        KeepAwake.activateKeepAwakeAsync();
      }
    } catch (e) {}
  };

  const PauseAudio = async () => {
    try {
      const audioStatus = await audio.getStatusAsync();

      if (audioStatus.isLoaded) {
        if (audioStatus.isPlaying) {
          audio.pauseAsync();

          KeepAwake.deactivateKeepAwake();
        }
      }
    } catch (e) {}
  };

  const StopAudio = async () => {
    try {
      const audioStatus = await audio.getStatusAsync();

      if (audioStatus.isLoaded) {
        PauseAudio();

        audio.setPositionAsync(0);
      }
    } catch (e) {}
  };

  const UnloadAudio = async () => {
    try {
      await audio.unloadAsync();

      KeepAwake.deactivateKeepAwake();
    } catch (e) {}
  };

  const UpdateAudio = async (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      KeepAwake.deactivateKeepAwake();

      LoadAudio(); // to replay on natives
    }
  };

  // const audio = useRef(new Audio.Sound());

  useEffect(() => {
    LoadAudio();
  }, [chapterAudio]);

  return (
    <View style={styles.audioPlayer}>
      <AudioTouchable name="play" onPress={PlayAudio} active={active} />
      <AudioTouchable name="pause" onPress={PauseAudio} active={active} />
      <AudioTouchable name="stop" onPress={StopAudio} active={active} />
    </View>
  );
}
