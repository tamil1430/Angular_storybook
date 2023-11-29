// src/app/my-component/my-component.stories.ts
import { AlertMessagesComponent } from './alert-messages.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/AlertMessages',
  component: AlertMessagesComponent,
} as Meta<AlertMessagesComponent>;

type AlertMessagesComponentStory = StoryObj<AlertMessagesComponent>;
const Template: AlertMessagesComponentStory = {
  args: {},
};

export const Default: AlertMessagesComponentStory = {
  ...Template,
  args: {},
};