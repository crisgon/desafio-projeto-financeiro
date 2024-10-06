import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} as Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    label: "Contained",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined",
    variant: "outlined",
  },
};
