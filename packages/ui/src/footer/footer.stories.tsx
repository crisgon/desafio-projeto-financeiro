import type { Meta, StoryObj } from "@storybook/react";

import { Footer as FooterComponent } from ".";

const meta = {
  title: "Components/Footer",
  component: FooterComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {};
