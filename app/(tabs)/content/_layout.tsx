import { Stack } from 'expo-router';

export default function ContentTabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[slugchain]" />
    </Stack>
  );
}
