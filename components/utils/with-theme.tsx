import React from "react";
import { LucideIcon, LucideProps } from "lucide-react-native";
import { useTheme } from "@/hooks";

interface ThemeProps {
  onDark: string;
  onLight: string;
}

function withTheme({
  onDark,
  onLight,
  icon: Icon,
  ...props
}: { icon: LucideIcon & LucideProps } & ThemeProps): JSX.Element {
  const { themeMode } = useTheme();
  const color = themeMode === "dark" ? onDark : onLight;
  return <Icon {...(props as LucideProps)} color={color} />;
}

export default withTheme;
