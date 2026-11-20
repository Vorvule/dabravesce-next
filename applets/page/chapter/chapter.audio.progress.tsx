import { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  type GestureResponderEvent,
  type LayoutChangeEvent,
} from 'react-native';

import ThemedText from '@/components/themed/themed.text';
import { useThemeColor } from '@/hooks/use.theme.color';

type Props = {
  currentTime: number;
  duration: number;
  onSeek: (seconds: number) => void;
};

function formatTime(seconds: number): string {
  const total = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  const mm = hours > 0 ? String(minutes).padStart(2, '0') : String(minutes);
  const ss = String(secs).padStart(2, '0');

  return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
}

export default function ChapterAudioProgress({ currentTime, duration, onSeek }: Props) {
  const trackColor = useThemeColor({}, 'border');
  const fillColor = useThemeColor({}, 'link');

  const [width, setWidth] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const previewRef = useRef<number | null>(null);
  const dragging = useRef(false);

  const validDuration = Number.isFinite(duration) && duration > 0 ? duration : 0;
  const shownTime = preview ?? currentTime;
  const progress = validDuration > 0
    ? Math.min(Math.max(shownTime / validDuration, 0), 1)
    : 0;

  const secondsFromEvent = (event: GestureResponderEvent): number | null => {
    if (!width || !validDuration) {
      return null;
    }

    const x = Math.min(Math.max(event.nativeEvent.locationX, 0), width);
    return (x / width) * validDuration;
  };

  const updatePreview = (event: GestureResponderEvent) => {
    const seconds = secondsFromEvent(event);

    if (seconds === null) {
      return;
    }

    previewRef.current = seconds;
    setPreview(seconds);
  };

  const handleGrant = (event: GestureResponderEvent) => {
    dragging.current = true;
    updatePreview(event);
  };

  const handleMove = (event: GestureResponderEvent) => {
    if (dragging.current) {
      updatePreview(event);
    }
  };

  const handleRelease = () => {
    if (!dragging.current) {
      return;
    }

    dragging.current = false;
    const seconds = previewRef.current;
    previewRef.current = null;
    setPreview(null);

    if (seconds !== null) {
      onSeek(seconds);
    }
  };

  const handleTerminate = () => {
    dragging.current = false;
    previewRef.current = null;
    setPreview(null);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={styles.container}>
      <ThemedText type="item" style={styles.time}>{formatTime(shownTime)}</ThemedText>

      <View
        accessible
        accessibilityRole="slider"
        accessibilityLabel="Прагрэс прайгравання"
        accessibilityValue={{ min: 0, max: validDuration, now: shownTime }}
        hitSlop={{ top: 12, bottom: 12 }}
        onLayout={handleLayout}
        onStartShouldSetResponder={() => true}
        onResponderGrant={handleGrant}
        onResponderMove={handleMove}
        onResponderRelease={handleRelease}
        onResponderTerminate={handleTerminate}
        style={[styles.track, { backgroundColor: trackColor }]}>
        <View
          pointerEvents="none"
          style={[styles.fill, { backgroundColor: fillColor, width: `${progress * 100}%` }]}
        />
        <View
          pointerEvents="none"
          style={[styles.thumb, { backgroundColor: fillColor, left: `${progress * 100}%` }]}
        />
      </View>

      <ThemedText type="item" style={styles.time}>{formatTime(validDuration)}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
    width: '100%',
  },
  time: {
    fontSize: 14,
    lineHeight: 18,
    minWidth: 44,
    textAlign: 'center',
  },
  track: {
    borderRadius: 3,
    flex: 1,
    height: 6,
    justifyContent: 'center',
  },
  fill: {
    borderRadius: 3,
    height: '100%',
  },
  thumb: {
    borderRadius: 7,
    height: 14,
    marginLeft: -7,
    position: 'absolute',
    top: -4,
    width: 14,
  },
});
