// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";

import { firebaseApp } from "@/firebaseConfig";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

import RoundButton from "@/components/RoundButton";

export default function ChapterAudio({ chapterAudio }) {
  const [sound, _] = useState(new Audio.Sound());

  const [enabledButtons, setEnabledButtons] = useState({
    play: false,
    pause: false,
    stop: false,
  });

  useEffect(() => {
    SetAudio();
    activateKeepAwakeAsync();
  }, [chapterAudio]);

  const SetAudio = async () => {
    try {
      UnloadAudio();

      LoadAudio().then(() => {
        setEnabledButtons({ play: true, pause: false, stop: false });
      });

      sound.setOnPlaybackStatusUpdate(UpdateAudio);
    } catch (error) {
      console.error(error);
    }
  };

  const LoadAudio = async () => {
    const firebaseStorage = getStorage();
    const audioRef = ref(firebaseStorage, chapterAudio);
    const audioUri = await getDownloadURL(audioRef);

    await sound.loadAsync({ uri: audioUri }, {}, true);
    await deactivateKeepAwake();
  };

  const PlayAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();

      if (audioStatus.isLoaded && !audioStatus.isPlaying) {
        sound.playAsync();

        setEnabledButtons({ play: false, pause: true, stop: true });

        await activateKeepAwakeAsync();
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

        setEnabledButtons({ play: true, pause: false, stop: true });

        await deactivateKeepAwake();
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
          setEnabledButtons({ play: true, pause: false, stop: false });
        });

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

  const UpdateAudio = async (playbackStatus) => {
    // to replay on native platforms and to highlight icons correctly
    if (playbackStatus.didJustFinish) {
      SetAudio();
    }
  };

  return (
    <View style={styles.player}>
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

const styles = StyleSheet.create({
  player: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});
