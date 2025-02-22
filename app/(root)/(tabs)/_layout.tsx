import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="calender" />
      <Tabs.Screen name="browse" />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
};
export default TabsLayout;
