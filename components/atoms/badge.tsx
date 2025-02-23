import { Text, View } from "react-native";
import React from "react";

const Badge = ({
  children,
  boxStyle,
  textStyle,
}: {
  children: React.ReactNode;
  textStyle?: string;
  boxStyle?: string;
}) => {
  return (
    <View className="self-start mt-2">
      <View
        className={`items-center rounded-xl border-0 px-2 py-0.5 ${boxStyle}`}
      >
        <Text className={`font-semibold text-sm ${textStyle}`}>{children}</Text>
      </View>
    </View>
  );
};

export default Badge;
