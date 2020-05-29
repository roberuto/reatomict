module.exports = {
  stories: ["../src/ui/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport/register",
    "./.storybook/theme-addon/register.js",
  ],
};
