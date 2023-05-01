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
    LightBrandingPrimary:"#3D88EB",
    LightTextDarkMid: "#36384A",
    LightTextDarkHigh: "#171727",
    LightTextDarkLow: "#73798F",
    LightThemePrimary600: "#3D88EB",
    LightThemePrimary20: "#BBD5FF",
    LightThemeInfo20: "#B5EDF5",
    LightNatural100: "#73798F",
    LightBGGrade15:"#F7F7FA",
    LightBGGrade3:"#DADCE6",
    LightBorderMid:"#DADCED",
    DarkNatural300: "#A4A9BD",
    LightNatural40:"#A4A9BD",
    LightNatural400: "#45485B",
    DarkThemePrimary600: "#3D88EB",
    DarkNatural100: "#83899F",
    DarkBGGrade15: "#101021",
    DarkThemePrimary500Light: "#2E518F",
    DarkBasicWhite: "#FFFFFF",
    DarkTextLightLow: "#83899F",
    DarkTextLightHigh: "#EDEEF3",
    DarkTextLightMid: "#C7CAD9",
    background: "#fff",

  },
  breakpoints,
  fontSizes,
  space,
};

const darkTheme = {
  colors: {
    LightBrandingPrimary:"#3D88EB",
    LightTextDarkMid: "#36384A",
    LightTextDarkHigh: "#171727",
    LightTextDarkLow: "#73798F",
    LightThemePrimary600: "#3D88EB",
    LightThemePrimary20: "#BBD5FF",
    LightThemeInfo20: "#B5EDF5",
    LightNatural100: "#73798F",
    LightBGGrade15:"#F7F7FA",
    LightBGGrade3:"#DADCE6",
    LightNatural40:"#A4A9BD",
    LightNatural400: "#45485B",
    LightBorderMid:"#DADCED",
    DarkThemePrimary600: "#3D88EB",
    DarkNatural100: "#83899F",
    DarkNatural300: "#A4A9BD",
    DarkBGGrade15: "#101021",
    DarkThemePrimary500Light: "#2E518F",
    DarkBasicWhite: "#FFFFFF",
    DarkTextLightLow: "#83899F",
    DarkTextLightHigh: "#EDEEF3",
    DarkTextLightMid: "#C7CAD9",
    background: "#fff",

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
    // secondaryColors: {
    //   [key in keyof typeof darkTheme.secondaryColors]: string;
    // };
  };
}

export type { ThemeStyledProps };

export { light, dark, lightTheme, darkTheme };
