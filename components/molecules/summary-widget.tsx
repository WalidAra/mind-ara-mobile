import React from "react";
import { View } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text as CustomText } from "@/components/ui/text";
import Badge from "@/components/atoms/badge";

const SummaryWidget = () => {
  const progress = 75; // Example progress value

  return (
    <Card
      size="md"
      variant="elevated"
      className="w-full bg-light-secondary dark:bg-dark-secondary flex-row items-center justify-between p-4"
    >
      <View style={{ flex: 1 }}>
        <Heading size="md" style={{ marginBottom: 4 }}>
          Tasks progress
        </Heading>
        <CustomText size="sm">30/40 tasks done</CustomText>
        <Badge boxStyle="bg-blue-500" textStyle="text-white capitalize">
          march 29
        </Badge>
      </View>
      <View></View>
    </Card>
  );
};

export default SummaryWidget;
