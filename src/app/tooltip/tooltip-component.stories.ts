// src/app/my-component/my-component.stories.ts
import { TooltipComponent } from './tooltip.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/Tooltip',
  component: TooltipComponent,
} as Meta<TooltipComponent>;

type TooltipComponentStory = StoryObj<TooltipComponent>;
const Template: TooltipComponentStory = {
  args: {},
};

export const Default: TooltipComponentStory = {
  ...Template,
  args: {},
};