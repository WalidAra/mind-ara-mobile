import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

const TaskCard = () => {
  return (
    <Card
      size="md"
      variant="elevated"
      className="bg-light-secondary dark:bg-dark-secondary mt-4"
    >
      <View>
        <Heading size="md" className="mb-1">
          Fix chrome extension
        </Heading>
        <Text size="sm">
          This is task description to do something productive than just being
          lame
        </Text>
      </View>
    </Card>
  );
};
export default TaskCard;
