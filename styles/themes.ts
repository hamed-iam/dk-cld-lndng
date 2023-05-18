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
    LightBrandingPrimary: "#3D88EB",
    LightTextDarkMid: "#36384A",
    LightTextDarkHigh: "#171727",
    LightTextDarkLow: "#73798F",
    LightTextMid:"#36384A",
    LightTextLow:"#73798F",
    LightThemePrimary600: "#3D88EB",
    LightThemePrimary20: "#BBD5FF",
    LightThemePrimary5:"#F0F6FF",
    LightThemeInfo20: "#B5EDF5",
    LightNatural100: "#73798F",
    LightBGGrade15: "#F7F7FA",
    LightBGGrade3: "#DADCE6",
    LightBorderMid: "#DADCED",
    LightNatural40: "#A4A9BD",
    LightNatural400: "#45485B",
    DarkNatural300: "#A4A9BD",
    DarkThemePrimary10:'#1B264D',
    DarkThemePrimary20:"#30427A",
    DarkThemePrimary600: "#3D88EB",
    DarkThemeSuccess800:"#54E8AF",
    DarkTextLightHighest: "#FFFFFF",
    DarkTextLow:"#83899F",
    DarkBorderHigh: "#36384A",
    DarkBorderMid:"#2B2C40",
    DarkBGGrade15: "#101021",
    DarkBGGrade1:"#09091A",
    DarkBGGrade2: "#171727",
    DarkBGGrade3:"#262738",
    DarkBGGrade4:"#36384A",
    DarkNatural100: "#83899F",
    DarkThemePrimary500Light: "#2E518F",
    DarkThemeInfo10:"#002A38",
    DarkThemeInfo20:"#0B495A",
    DarkThemeInfo800:"#67DADE",
    DarkBasicWhite: "#FFFFFF",
    DarkTextLightLow: "#83899F",
    DarkTextMid:"#C7CAD9",
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
    LightBrandingPrimary: "#3D88EB",
    LightTextDarkMid: "#36384A",
    LightTextDarkHigh: "#171727",
    LightTextDarkLow: "#73798F",
    LightTextMid:"#36384A",
    LightTextLow:"#73798F",
    LightThemePrimary600: "#3D88EB",
    LightThemePrimary20: "#BBD5FF",
    LightThemePrimary5:"#F0F6FF",
    LightThemeInfo20: "#B5EDF5",
    LightNatural100: "#73798F",
    LightBGGrade15: "#F7F7FA",
    LightBGGrade3: "#DADCE6",
    LightNatural40: "#A4A9BD",
    LightNatural400: "#45485B",
    LightBorderMid: "#DADCED",
    DarkThemePrimary20:"#30427A",
    DarkThemePrimary600: "#3D88EB",
    DarkThemeSuccess800:"#54E8AF",
    DarkBorderHigh: "#36384A",
    DarkBorderMid:"#2B2C40",
    DarkNatural100: "#83899F",
    DarkNatural300: "#A4A9BD",
    DarkBGGrade15: "#101021",
    DarkBGGrade1:"#09091A",
    DarkBGGrade2: "#171727",
    DarkBGGrade3:"#262738",
    DarkBGGrade4:"#36384A",
    DarkThemePrimary10:'#1B264D',
    DarkThemePrimary500Light: "#2E518F",
    DarkThemeInfo10:"#002A38",
    DarkThemeInfo20:"#0B495A",
    DarkThemeInfo800:"#67DADE",
    DarkBasicWhite: "#FFFFFF",
    DarkTextLightHighest: "#FFFFFF",
    DarkTextLow:"#83899F",
    DarkTextMid:"#C7CAD9",
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
