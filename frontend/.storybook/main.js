const { resolve } = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-apollo-client",
  ],
  webpackFinal: (config) => {
    config.resolve.alias['@src'] = resolve(__dirname, '../src');
    config.resolve.alias['@components'] = resolve(__dirname, '../src/components');
    config.resolve.alias['@pages'] = resolve(__dirname, '../src/pages');
    config.resolve.alias['@utils'] = resolve(__dirname, '../src/utils');
    return config;
  }
}
