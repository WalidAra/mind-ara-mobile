import { Theme } from "@/types";

const isValidTheme = (value: any): value is Theme => {
  return ["system", "light", "dark"].includes(value);
};

export default isValidTheme;
