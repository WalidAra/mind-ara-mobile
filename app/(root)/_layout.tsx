import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="today" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};
export default RootLayout;
