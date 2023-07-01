// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import { useEffect, useState } from "react";
import { View } from "react-native";

import { firebaseApp } from "../../firebaseConfig";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

import { Audio } from "expo-av";
import { useKeepAwake } from "expo-keep-awake";

import AudioTouchable from "./AudioTouchable";
import { styles } from "../constants/styles";

export default function ChapterAudio({ chapterAudio }) {
  const [sound, _] = useState(new Audio.Sound());

  const [active, setActive] = useState({
    play: false,
    pause: false,
    stop: false,
  });

  useKeepAwake();

  useEffect(() => {
    SetAudio();
  }, [chapterAudio]);

  const SetAudio = async () => {
    try {
      UnloadAudio();

      LoadAudio().then(() => {
        setActive({ play: true, pause: false, stop: false });
      });

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

        setActive({ play: false, pause: true, stop: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const PauseAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();

      if (audioStatus.isLoaded && audioStatus.isPlaying) {
        sound.pauseAsync();

        setActive({ play: true, pause: false, stop: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const StopAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();

      if (audioStatus.isLoaded) {
        PauseAudio().then(() => {
          setActive({ play: true, pause: false, stop: false });
        });

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
    // to replay on native platforms and to highlight icons correctly
    if (playbackStatus.didJustFinish) {
      SetAudio();
    }
  };

  return (
    <View style={styles.audioPlayer}>
      <AudioTouchable name="play" onPress={PlayAudio} active={active.play} />
      <AudioTouchable name="pause" onPress={PauseAudio} active={active.pause} />
      <AudioTouchable name="stop" onPress={StopAudio} active={active.stop} />
    </View>
  );
}
