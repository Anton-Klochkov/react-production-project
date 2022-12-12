/* eslint-disable linebreak-style */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const LightPageError = Template.bind({});
LightPageError.args = {};

export const DarkPageError = Template.bind({});
DarkPageError.args = {};

DarkPageError.decorators = [ThemeDecorator(Theme.DARK)];
