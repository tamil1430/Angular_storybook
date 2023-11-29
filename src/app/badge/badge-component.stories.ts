// src/app/my-component/my-component.stories.ts
import { BadgeComponent } from './badge.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/Badge',
  component: BadgeComponent,
} as Meta<BadgeComponent>;

type BadgeComponentStory = StoryObj<BadgeComponent>;
const Template: BadgeComponentStory = {
  args: {},
};

export const Default: BadgeComponentStory = {
  ...Template,
  args: {},
};