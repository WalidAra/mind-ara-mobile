const envConfig = {
  apiUrl: process.env.EXPO_PUBLIC_API_URL as string,
  bearer: process.env.EXPO_PUBLIC_API_KEY as string,
  themeKey: process.env.EXPO_PUBLIC_THEME_KEY as string,
  authBearer: process.env.EXPO_PUBLIC_AUTH_BEARER as string,
};

export default envConfig;
