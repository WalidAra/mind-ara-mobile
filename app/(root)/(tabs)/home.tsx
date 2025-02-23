import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView, Text, View } from "react-native";
import Greetings from "@/components/pages/home/greetings";
import { Input, InputField } from "@/components/ui/input";
import withTheme from "@/components/utils/with-theme";
import { LucideProps, Search } from "lucide-react-native";
import SummaryWidget from "@/components/molecules/summary-widget";
import TaskCard from "@/components/organisms/task-card";

const ThemedSearchIcon = (props: Omit<LucideProps, "color">) =>
  withTheme({
    size: 25,
    icon: Search,
    onLight: "hsl(60, 9.1%, 97.8%)",
    onDark: "hsl(20, 14.3%, 4.1%)",
    ...props,
  });
const Home = () => {
  return (
    <SafeAreaView className="h-full bg-light-background dark:bg-dark-background">
      <ScrollView>
        <View className="w-full p-6 flex-1 flex flex-col gap-6">
          <Greetings />
          <View className="flex w-full flex-row h-12 px-4 items-center bg-light-secondary dark:bg-dark-secondary rounded-lg ">
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              className="flex-1 border-0 px-0"
            >
              <InputField
                className="flex-1 px-0"
                placeholder="Enter Text here..."
              />
            </Input>
            <View className="h-full flex items-center justify-center">
              <ThemedSearchIcon />
            </View>
          </View>
          <SummaryWidget />
          <View className={"w-full flex flex-row gap-4"}>
            <View className={"h-[350px] bg-red-500 w-1/2 rounded-2xl"}></View>
            <View className={"w-1/2 rounded-2xl gap-4"}>
              <View className={"h-48 bg-red-500 rounded-2xl"}></View>
              <View className={"h-48 bg-red-500 rounded-2xl"}></View>
            </View>
          </View>
          <View className={"w-full"}>
            <Text
              className={
                "text-2xl font-bold tracking-tight text-light-foreground dark:text-dark-foreground"
              }
            >
              Recent tasks
            </Text>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={({ item }) => <TaskCard key={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
