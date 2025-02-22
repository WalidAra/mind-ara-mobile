import React from "react";
import { ScrollView, Text, View } from "react-native";
import MindaraLogo from "@/components/atoms/mindara-logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";
import { Mail } from "lucide-react-native";
import { Link } from "expo-router";
import GoogleButton from "@/components/atoms/google-button";

const Welcome = () => {
  return (
    <SafeAreaView className={"h-full bg-light-background "}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View
          className={
            "flex flex-col items-center justify-center gap-10 p-6 h-full "
          }
        >
          <View className={"flex flex-row gap-2 items-center"}>
            <View className={"p-2 rounded-xl bg-light-primary"}>
              <MindaraLogo color={"#fff"} size={20} />
            </View>
            <Text className={"text-3xl font-bold "}>Mindara</Text>
          </View>
          <View className={"w-full flex-1 bg-red-500 rounded-xl"}></View>
          <View className={"gap-4 flex flex-col w-full"}>
            <GoogleButton />

            <Link href={"/(auth)/sign-in"} asChild={true}>
              <Button size={"lg"} variant={"outline"} className={"rounded-xl"}>
                <Mail size={20} color={"hsl(20, 14.3%, 4.1%)"} />
                <ButtonText className={"text-light-foreground"}>
                  Continue with email
                </ButtonText>
              </Button>
            </Link>
          </View>

          <View className={"w-full flex items-center justify-center mb-8"}>
            <Text className={"text-center text-sm"}>
              By continuing with the services above , you agree to MindAra's{" "}
              <Text className={"font-semibold underline"}>
                terms of services
              </Text>{" "}
              and{" "}
              <Text className={"font-semibold underline"}>privacy policy</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Welcome;
