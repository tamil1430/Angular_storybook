// src/app/my-component/my-component.stories.ts
import { CardComponent } from './card.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/Card',
  component: CardComponent,
} as Meta<CardComponent>;

type CardComponentStory = StoryObj<CardComponent>;
const Template: CardComponentStory = {
  args: {},
};

export const Default: CardComponentStory = {
  ...Template,
  args: {},
};