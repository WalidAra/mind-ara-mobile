import React from "react";
import { Text, View } from "react-native";

interface ProgressCircleProps {
  progress: number; // Value between 0 and 100
  size?: number;
  strokeWidth?: number;
  progressColor?: string;
  trackColor?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,
  size = 50,
  strokeWidth = 10,
  progressColor = "#3498db",
  trackColor = "#e6e6e6",
}) => {
  const halfSize = size / 2;
  const circleStyle = { width: size, height: size, borderRadius: halfSize };

  // For progress <= 50, the right half rotates proportionally.
  // For progress > 50, the right half remains at 180° and the left half rotates.
  const rightRotation = progress <= 50 ? (progress / 50) * 180 : 180;
  const leftRotation = progress > 50 ? ((progress - 50) / 50) * 180 : 0;

  return (
    <View style={[circleStyle]} className="justify-center items-center">
      {/* Background track */}
      <View
        style={[
          circleStyle,
          { borderWidth: strokeWidth, borderColor: trackColor },
        ]}
        className="absolute"
      />

      {/* Right half circle */}
      <View
        style={[circleStyle, { overflow: "hidden" }]}
        className="absolute top-0 left-0"
      >
        <View
          style={[
            circleStyle,
            {
              borderWidth: strokeWidth,
              borderColor: progressColor,
              transform: [{ rotate: `${rightRotation}deg` }],
            },
          ]}
          // Hide left and bottom borders (simulate arc)
          className="absolute top-0 left-0 border-l-0 border-b-0"
        />
      </View>

      {/* Left half circle (only visible when progress > 50) */}
      {progress > 50 && (
        <View
          style={[
            circleStyle,
            { overflow: "hidden", transform: [{ rotate: "180deg" }] },
          ]}
          className="absolute top-0 left-0"
        >
          <View
            style={[
              circleStyle,
              {
                borderWidth: strokeWidth,
                borderColor: progressColor,
                transform: [{ rotate: `${leftRotation}deg` }],
              },
            ]}
            className="absolute top-0 left-0 border-l-0 border-b-0"
          />
        </View>
      )}

      {/* Inner circle with centered text */}
      <View
        style={{
          width: size - strokeWidth * 2,
          height: size - strokeWidth * 2,
          borderRadius: (size - strokeWidth * 2) / 2,
        }}
        className="absolute bg-white justify-center items-center"
      >
        <Text className="text-lg font-bold">{progress}%</Text>
      </View>
    </View>
  );
};

export default ProgressCircle;
