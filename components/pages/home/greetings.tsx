import { Text, View } from "react-native";
import React from "react";

const Greetings = () => {
  return (
    <View className={"w-full"}>
      <Text
        className={
          "text-2xl font-bold tracking-tight text-light-foreground dark:text-dark-foreground"
        }
      >
        Hi, walid
      </Text>
      <Text
        className={
          "text-2xl font-bold tracking-tight text-light-foreground dark:text-dark-foreground"
        }
      >
        be productive today!
      </Text>
    </View>
  );
};
export default Greetings;
