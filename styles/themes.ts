const breakpoints = ["31.25em", "43.75em", "46.875em"];
const fontSizes = [
  "1.2rem",
  "1.4rem",
  "1.6rem",
  "1.8rem",
  "2.4rem",
  "2.8rem",
  "3.2rem",
  "4.0rem",
  "4.8rem",
  "6.4rem",
];

const space = [
  "0",
  ".4rem",
  ".8rem",
  "1.2rem",
  "1.6rem",
  "2.0rem",
  "3.2rem",
  "4.8rem",
  "6.4rem",
  "9.6rem",
];

const lightTheme = {
  colors: {
    LightTextDarkMid: "#36384A",
    LightTextDarkLow: "#73798F",
    LightThemePrimary600: "#3D88EB",
    LightThemeInfo20: "#B5EDF5",
    LightNatural100:"#73798F",
    LightNatural400:"#45485B",
    DarkBGGrade15: "#101021",
    DarkThemePrimary500Light: "#2E518F",
    DarkBasicWhite: "#FFFFFF",
    DarkTextLightLow: "#83899F",
    DarkTextLightHigh: "#EDEEF3",

    //

    primary: "#0070f3",
    text: "#000",
    background: "#fff",
    blue: "#2179ee",
    green: "#00cc9a",
    coral: "#ff6759",
    gold: "#f0b95b",
    purple: "#7537ef",
    white: "#ffffff",
    black: "#000000",
    grey10: "#f3f4f8",
    grey20: "#e1e5eb",
    grey30: "#c2c6cc",
    grey40: "#9ea2a8",
    grey50: "#686c73",
    grey60: "#30363d",
  },
  secondaryColors: {
    blue10: "#ade7ff",
    blue20: "#61bcff",
    blue30: "#2179ee",
    blue40: "#1f4ab4",
    blue50: "#1d2064",
    green10: "#b5ffcb",
    green20: "#5dffa3",
    green30: "#00cc9a",
    green40: "#219a8a",
    green50: "#183f51",
    purple10: "#dec7ff",
    purple20: "#a673ff",
    purple30: "#7537ef",
    purple40: "#4e23b6",
    purple50: "#2d1b64",
    coral10: "#ffc6b3",
    coral20: "#ff8e75",
    coral30: "#ff6759",
    coral40: "#eb312a",
    coral50: "#7b1e30",
    gold10: "#ffedc2",
    gold20: "#ffda8b",
    gold30: "#f0b95b",
    gold40: "#e5a229",
    gold50: "#6a4a24",
  },
  breakpoints,
  fontSizes,
  space,
};

const darkTheme = {
  colors: {
    LightTextDarkMid: "#36384A",
    LightTextDarkLow: "#73798F",
    LightThemePrimary600: "#3D88EB",
    LightThemeInfo20: "#B5EDF5",
    LightNatural100:"#73798F",
    LightNatural400:"#45485B",
    DarkBGGrade15: "#101021",
    DarkThemePrimary500Light: "#2E518F",
    DarkBasicWhite: "#FFFFFF",
    DarkTextLightLow: "#83899F",
    DarkTextLightHigh: "#EDEEF3",

    //
    primary: "#0070f3",
    text: "#fff",
    background: "#000",
    blue: "#2179ee",
    green: "#00cc9a",
    coral: "#ff6759",
    gold: "#f0b95b",
    purple: "#7537ef",
    white: "#ffffff",
    black: "#000000",
    grey10: "#f3f4f8",
    grey20: "#e1e5eb",
    grey30: "#c2c6cc",
    grey40: "#9ea2a8",
    grey50: "#686c73",
    grey60: "#30363d",
  },
  secondaryColors: {
    blue10: "#ade7ff",
    blue20: "#61bcff",
    blue30: "#2179ee",
    blue40: "#1f4ab4",
    blue50: "#1d2064",
    green10: "#b5ffcb",
    green20: "#5dffa3",
    green30: "#00cc9a",
    green40: "#219a8a",
    green50: "#183f51",
    purple10: "#dec7ff",
    purple20: "#a673ff",
    purple30: "#7537ef",
    purple40: "#4e23b6",
    purple50: "#2d1b64",
    coral10: "#ffc6b3",
    coral20: "#ff8e75",
    coral30: "#ff6759",
    coral40: "#eb312a",
    coral50: "#7b1e30",
    gold10: "#ffedc2",
    gold20: "#ffda8b",
    gold30: "#f0b95b",
    gold40: "#e5a229",
    gold50: "#6a4a24",
  },
  breakpoints,
  fontSizes,
  space,
};

const light = (locale: string) => {
  return { ...lightTheme, locale };
};

const dark = (locale: string) => {
  return { ...darkTheme, locale };
};

interface ThemeStyledProps {
  theme: {
    colors: {
      [key in keyof typeof darkTheme.colors]: string;
    };
    locale: "en" | "fa";
    breakpoints: string[];
    fontSizes: string[];
    space: string[];
    secondaryColors: {
      [key in keyof typeof darkTheme.secondaryColors]: string;
    };
  };
}

export type { ThemeStyledProps };

export { light, dark, lightTheme, darkTheme };
