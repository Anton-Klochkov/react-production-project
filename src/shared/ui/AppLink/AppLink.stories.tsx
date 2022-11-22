import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const PrimaryAppLink = Template.bind({});
PrimaryAppLink.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

export const PrimaryAppLinkDark = Template.bind({});
PrimaryAppLinkDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

PrimaryAppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryAppLink = Template.bind({});
SecondaryAppLink.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryAppLinkDark = Template.bind({});
SecondaryAppLinkDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};

SecondaryAppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];
