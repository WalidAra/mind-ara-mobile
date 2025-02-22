import { createContext, useCallback, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  type Theme,
  ThemeProvider as NavThemeProvider,
} from "@react-navigation/native";
import { envConfig } from "@/config";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { isValidTheme } from "@/utils";
import { StatusBar } from "expo-status-bar";

type ThemeMode = "light" | "dark" | "system";
type ThemeContextType = {
  theme: Theme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: DefaultTheme,
  themeMode: "system",
  setThemeMode: () => console.warn("ThemeProvider not initialized"),
  toggle: () => console.warn("ThemeProvider not initialized"),
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme() || "light";
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [isReady, setIsReady] = useState(false);

  const effectiveTheme =
    themeMode === "system"
      ? systemColorScheme === "dark"
        ? DarkTheme
        : DefaultTheme
      : themeMode === "dark"
        ? DarkTheme
        : DefaultTheme;

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(envConfig.themeKey);
        if (savedTheme && isValidTheme(savedTheme)) {
          setThemeMode(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      } finally {
        setIsReady(true);
      }
    };
    loadTheme();
  }, []);

  const handleSetTheme = useCallback(async (mode: ThemeMode) => {
    try {
      await AsyncStorage.setItem(envConfig.themeKey, mode);
      setThemeMode(mode);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  }, []);

  const toggle = useCallback(() => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  if (!isReady) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme: effectiveTheme,
        themeMode,
        setThemeMode: handleSetTheme,
        toggle,
      }}
    >
      <GluestackUIProvider mode={effectiveTheme.dark ? "dark" : "light"}>
        <NavThemeProvider value={effectiveTheme}>
          {children}
          <StatusBar
            animated={true}
            style={effectiveTheme.dark ? "dark" : "auto"}
          />
        </NavThemeProvider>
      </GluestackUIProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
