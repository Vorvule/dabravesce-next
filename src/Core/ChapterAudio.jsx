// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import { useEffect, useState } from "react";
import { View } from "react-native";

import { firebaseApp } from "../../firebaseConfig";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

import { Audio } from "expo-av";
import { useKeepAwake } from "expo-keep-awake";

import AudioTouchable from "./AudioTouchable";
import { styles } from "../../constants/styles";

export default function ChapterAudio({ chapterAudio }) {
  const [sound, setSound] = useState(new Audio.Sound());
  const [active, setActive] = useState(false);

  useKeepAwake();

  useEffect(() => {
    SetAudio();
  }, [chapterAudio]);

  const SetAudio = async () => {
    try {
      UnloadAudio();
      LoadAudio();
      setActive(true);

      sound.setOnPlaybackStatusUpdate(UpdateAudio);
    } catch (error) {
      console.error(error);
    }
  };

  const LoadAudio = async () => {
    const firebaseStorage = getStorage();
    const audioRef = ref(firebaseStorage, chapterAudio);
    const uri = await getDownloadURL(audioRef);

    await sound.loadAsync({ uri: uri }, {}, true);
  };

  const PlayAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();

      if (audioStatus.isLoaded && !audioStatus.isPlaying) {
        sound.playAsync();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const PauseAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();

      if (audioStatus.isLoaded) {
        if (audioStatus.isPlaying) {
          sound.pauseAsync();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const StopAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();

      if (audioStatus.isLoaded) {
        PauseAudio();

        sound.setPositionAsync(0);
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

  const UpdateAudio = async (playbackStatus) => {
    // to replay on native platforms
    if (playbackStatus.didJustFinish) {
      SetAudio();
    }
  };

  return (
    <View style={styles.audioPlayer}>
      <AudioTouchable name="play" onPress={PlayAudio} active={active} />
      <AudioTouchable name="pause" onPress={PauseAudio} active={active} />
      <AudioTouchable name="stop" onPress={StopAudio} active={active} />
    </View>
  );
}
