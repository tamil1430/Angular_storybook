// src/app/my-component/my-component.stories.ts
import { MyComponentComponent } from './my-component.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/MyformComponent',
  component: MyComponentComponent,
} as Meta<MyComponentComponent>;

type MyComponentStory = StoryObj<MyComponentComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};