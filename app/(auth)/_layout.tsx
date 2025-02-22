import React from "react";
import { Stack, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

const RootLayout = () => {
  const router = useRouter();

  return (
    <Stack
      initialRouteName="welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
              <ChevronLeft size={25} color={"hsl(25, 5.3%, 44.7%)"} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
              <ChevronLeft size={25} color={"hsl(25, 5.3%, 44.7%)"} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
