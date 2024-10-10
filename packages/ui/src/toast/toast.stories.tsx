import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Toast } from ".";

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    isOpen: true,
    content: "This is an info toast",
    type: "info",
    handleClose: fn(),
  },
};

export const Error: Story = {
  args: {
    isOpen: true,
    content: "This is an error toast",
    type: "error",
    handleClose: fn(),
  },
};

export const Warning: Story = {
  args: {
    isOpen: true,
    content: "This is a warning toast",
    type: "warning",
    handleClose: fn(),
  },
};

export const Success: Story = {
  args: {
    isOpen: true,
    content: "This is a success toast",
    type: "success",
    handleClose: fn(),
  },
};
