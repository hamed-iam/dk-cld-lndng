module.exports = {
  i18n: {
    localeDetection: true,
    locales: ["en", "fa", "default"],
    defaultLocale: "default",
  },
//   localePath:
//     typeof window === "undefined"
//       ? require("path").resolve("./locales")
//       : "/public/publicLocales",
//   ns: ["common"],
localePath: require("path").resolve("./locales")
};
