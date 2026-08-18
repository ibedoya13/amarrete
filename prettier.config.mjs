/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  printWidth: 100,
  useTabs: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
