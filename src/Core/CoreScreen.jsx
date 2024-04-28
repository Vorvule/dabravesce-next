import { useEffect, useRef } from "react";
import { ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { CorePage } from "../service/CorePage";
import { DeviceData } from "../service/DeviceData";
import { styles } from "../constants/styles";

import CoreContent from "./CoreContent";

export function CoreScreen({ navigation, route }) {
  const routeChain = route.params.chain;
  const { albumName, bookName, chapter } = CorePage.getContents(routeChain);

  useFocusEffect(() => {
    if (!CorePage.chainsAreSame(chainRef.current, routeChain)) {
      chainRef.current = routeChain;

      scrollRef.current.scrollTo({ y: 0 });
    }
  });

  useEffect(() => {
    navigation.setOptions({ title: albumName });
  });

  const scrollRef = useRef();
  const chainRef = useRef([-1, -1, -1]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={DeviceData.deviceIsMobile()}
      style={styles.screenContainer}
      ref={scrollRef}
    >
      <CoreContent
        albumName={albumName}
        bookName={bookName}
        chapter={chapter}
      />
    </ScrollView>
  );
}
