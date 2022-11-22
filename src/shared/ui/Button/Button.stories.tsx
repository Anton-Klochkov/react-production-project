import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultPrimaryButton = Template.bind({});
DefaultPrimaryButton.args = {
  children: 'Text',
};

export const DefaultPrimaryButtonDark = Template.bind({});
DefaultPrimaryButtonDark.args = {
  children: 'Text',
};

DefaultPrimaryButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Cleat = Template.bind({});
Cleat.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

export const CleatDark = Template.bind({});
CleatDark.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

CleatDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINED,
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
