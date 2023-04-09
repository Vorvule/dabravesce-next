// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import { useEffect, useState } from "react";
import { Platform, View } from "react-native";

import { firebaseApp } from "../../firebaseConfig";
import { getDownloadURL, getStorage, getStream, ref } from "firebase/storage";

import { Audio } from "expo-av";
import { useKeepAwake } from "expo-keep-awake";

import AudioTouchable from "./AudioTouchable";
import { styles } from "../../constants/styles";

export default function ChapterAudio({ chapterAudio }) {
  const [sound, setSound] = useState(new Audio.Sound());
  const [active, setActive] = useState(false);

  useKeepAwake();

  useEffect(() => {
    LoadAudio();
  }, [chapterAudio]);

  
  const LoadAudio = async () => {
    try {
      UnloadAudio();
      
      /*Platform.OS == "web" ? RequireAudio() :*/
      // CreateAudio();

      // Firebase storage
      const firebaseStorage = getStorage();
      const audioRef = ref(firebaseStorage, chapterAudio);
      console.log("Audio ref", audioRef);
      console.log("Chapter audio", chapterAudio);
      const uri = await getDownloadURL(audioRef);
      await sound.loadAsync({ uri: uri }, {}, true);
      
      setActive(true);

      sound.setOnPlaybackStatusUpdate(UpdateAudio);
    } catch (error) {
      console.error(error);
    }
  };

  const PlayAudio = async () => {
    try {
      const audioStatus = await sound.getStatusAsync();
      console.log(audioStatus);

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
    if (playbackStatus.didJustFinish) {
      LoadAudio(); // to replay on natives
    }
  };
  /*
  const RequireAudio = async () => {
    switch (chapterAudio) {
      case "/audio/matt/01.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/01.mp3"));
        break;
      case "/audio/matt/02.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/02.mp3"));
        break;
      case "/audio/matt/03.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/03.mp3"));
        break;
      case "/audio/matt/04.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/04.mp3"));
        break;
      case "/audio/matt/05.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/05.mp3"));
        break;
      case "/audio/matt/06.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/06.mp3"));
        break;
      case "/audio/matt/07.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/07.mp3"));
        break;
      case "/audio/matt/08.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/08.mp3"));
        break;
      case "/audio/matt/09.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/09.mp3"));
        break;
      case "/audio/matt/10.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/10.mp3"));
        break;
      case "/audio/matt/11.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/11.mp3"));
        break;
      case "/audio/matt/12.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/12.mp3"));
        break;
      case "/audio/matt/13.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/13.mp3"));
        break;
      case "/audio/matt/14.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/14.mp3"));
        break;
      case "/audio/matt/15.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/15.mp3"));
        break;
      case "/audio/matt/16.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/16.mp3"));
        break;
      case "/audio/matt/17.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/17.mp3"));
        break;
      case "/audio/matt/18.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/18.mp3"));
        break;
      case "/audio/matt/19.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/19.mp3"));
        break;
      case "/audio/matt/20.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/20.mp3"));
        break;
      case "/audio/matt/21.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/21.mp3"));
        break;
      case "/audio/matt/22.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/22.mp3"));
        break;
      case "/audio/matt/23.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/23.mp3"));
        break;
      case "/audio/matt/24.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/24.mp3"));
        break;
      case "/audio/matt/25.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/25.mp3"));
        break;
      case "/audio/matt/26.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/26.mp3"));
        break;
      case "/audio/matt/27.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/27.mp3"));
        break;
      case "/audio/matt/28.mp3":
        await sound.loadAsync(require("../../assets/audio/matt/28.mp3"));
        break;

      case "/audio/mark/01.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/01.mp3"));
        break;
      case "/audio/mark/02.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/02.mp3"));
        break;
      case "/audio/mark/03.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/03.mp3"));
        break;
      case "/audio/mark/04.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/04.mp3"));
        break;
      case "/audio/mark/05.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/05.mp3"));
        break;
      case "/audio/mark/06.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/06.mp3"));
        break;
      case "/audio/mark/07.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/07.mp3"));
        break;
      case "/audio/mark/08.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/08.mp3"));
        break;
      case "/audio/mark/09.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/09.mp3"));
        break;
      case "/audio/mark/10.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/10.mp3"));
        break;
      case "/audio/mark/11.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/11.mp3"));
        break;
      case "/audio/mark/12.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/12.mp3"));
        break;
      case "/audio/mark/13.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/13.mp3"));
        break;
      case "/audio/mark/14.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/14.mp3"));
        break;
      case "/audio/mark/15.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/15.mp3"));
        break;
      case "/audio/mark/16.mp3":
        await sound.loadAsync(require("../../assets/audio/mark/16.mp3"));
        break;

      case "/audio/luke/01.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/01.mp3"));
        break;
      case "/audio/luke/02.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/02.mp3"));
        break;
      case "/audio/luke/03.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/03.mp3"));
        break;
      case "/audio/luke/04.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/04.mp3"));
        break;
      case "/audio/luke/05.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/05.mp3"));
        break;
      case "/audio/luke/06.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/06.mp3"));
        break;
      case "/audio/luke/07.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/07.mp3"));
        break;
      case "/audio/luke/08.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/08.mp3"));
        break;
      case "/audio/luke/09.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/09.mp3"));
        break;
      case "/audio/luke/10.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/10.mp3"));
        break;
      case "/audio/luke/11.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/11.mp3"));
        break;
      case "/audio/luke/12.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/12.mp3"));
        break;
      case "/audio/luke/13.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/13.mp3"));
        break;
      case "/audio/luke/14.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/14.mp3"));
        break;
      case "/audio/luke/15.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/15.mp3"));
        break;
      case "/audio/luke/16.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/16.mp3"));
        break;
      case "/audio/luke/17.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/17.mp3"));
        break;
      case "/audio/luke/18.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/18.mp3"));
        break;
      case "/audio/luke/19.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/19.mp3"));
        break;
      case "/audio/luke/20.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/20.mp3"));
        break;
      case "/audio/luke/21.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/21.mp3"));
        break;
      case "/audio/luke/22.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/22.mp3"));
        break;
      case "/audio/luke/23.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/23.mp3"));
        break;
      case "/audio/luke/24.mp3":
        await sound.loadAsync(require("../../assets/audio/luke/24.mp3"));
        break;

      case "/audio/john/01.mp3":
        await sound.loadAsync(require("../../assets/audio/john/01.mp3"));
        break;
      case "/audio/john/02.mp3":
        await sound.loadAsync(require("../../assets/audio/john/02.mp3"));
        break;
      case "/audio/john/03.mp3":
        await sound.loadAsync(require("../../assets/audio/john/03.mp3"));
        break;
      case "/audio/john/04.mp3":
        await sound.loadAsync(require("../../assets/audio/john/04.mp3"));
        break;
      case "/audio/john/05.mp3":
        await sound.loadAsync(require("../../assets/audio/john/05.mp3"));
        break;
      case "/audio/john/06.mp3":
        await sound.loadAsync(require("../../assets/audio/john/06.mp3"));
        break;
      case "/audio/john/07.mp3":
        await sound.loadAsync(require("../../assets/audio/john/07.mp3"));
        break;
      case "/audio/john/08.mp3":
        await sound.loadAsync(require("../../assets/audio/john/08.mp3"));
        break;
      case "/audio/john/09.mp3":
        await sound.loadAsync(require("../../assets/audio/john/09.mp3"));
        break;
      case "/audio/john/10.mp3":
        await sound.loadAsync(require("../../assets/audio/john/10.mp3"));
        break;
      case "/audio/john/11.mp3":
        await sound.loadAsync(require("../../assets/audio/john/11.mp3"));
        break;
      case "/audio/john/12.mp3":
        await sound.loadAsync(require("../../assets/audio/john/12.mp3"));
        break;
      case "/audio/john/13.mp3":
        await sound.loadAsync(require("../../assets/audio/john/13.mp3"));
        break;
      case "/audio/john/14.mp3":
        await sound.loadAsync(require("../../assets/audio/john/14.mp3"));
        break;
      case "/audio/john/15.mp3":
        await sound.loadAsync(require("../../assets/audio/john/15.mp3"));
        break;
      case "/audio/john/16.mp3":
        await sound.loadAsync(require("../../assets/audio/john/16.mp3"));
        break;
      case "/audio/john/17.mp3":
        await sound.loadAsync(require("../../assets/audio/john/17.mp3"));
        break;
      case "/audio/john/18.mp3":
        await sound.loadAsync(require("../../assets/audio/john/18.mp3"));
        break;
      case "/audio/john/19.mp3":
        await sound.loadAsync(require("../../assets/audio/john/19.mp3"));
        break;
      case "/audio/john/20.mp3":
        await sound.loadAsync(require("../../assets/audio/john/20.mp3"));
        break;
      case "/audio/john/21.mp3":
        await sound.loadAsync(require("../../assets/audio/john/21.mp3"));
        break;

      default:
        await sound.loadAsync(require("../../assets/audio/matt/01.mp3"));
    }
  };
*/
  const CreateAudio = async () => {
    const uri = "https://vorvule.com" + chapterAudio;

    await sound.loadAsync({ uri: uri }, {}, true);
  };

  return (
    <View style={styles.audioPlayer}>
      <AudioTouchable name="play" onPress={PlayAudio} active={active} />
      <AudioTouchable name="pause" onPress={PauseAudio} active={active} />
      <AudioTouchable name="stop" onPress={StopAudio} active={active} />
    </View>
  );
}
