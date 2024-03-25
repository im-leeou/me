import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me'
  }
};

export const Ghost: Story = {
  args: {
    children: 'Click me',
    variant: 'ghost'
  }
};
