import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Card } from ".";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    sx: {
      width: "690px",
      height: "400px",
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Card",
    children: "This is a Default card",
    type: "default",
  },
};

export const DefaultWithoutTitle: Story = {
  args: {
    children: "This is a Default card without title",
    type: "default",
  },
};

export const Primary: Story = {
  args: {
    title: "Primary Card",
    children: "This is a Primary card",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Card",
    children: "This is a Secondary card",
    type: "secondary",
  },
};
