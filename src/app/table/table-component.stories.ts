// src/app/my-component/my-component.stories.ts
import { TableComponent } from './table.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/table',
  component: TableComponent,
} as Meta<TableComponent>;

type TableComponentStory = StoryObj<TableComponent>;
const Template: TableComponentStory = {
  args: {},
};

export const Default: TableComponentStory = {
  ...Template,
  args: {},
};