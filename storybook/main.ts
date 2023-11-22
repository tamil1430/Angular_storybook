import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
     '../src/app/my-component/my-component.stories.ts',
     '../src/app/my-component/alert-component.stories.ts',
     '../src/app/my-component/badge-component.stories.ts',
     '../src/app/my-component/card-component.stories.ts',
     '../src/app/my-component/tooltip-component.stories.ts'
],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
