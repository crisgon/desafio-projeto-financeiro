import type { Meta, StoryObj } from "@storybook/react";

import { Header as HeaderComponent } from ".";

const meta = {
  title: "Components/Header",
  component: HeaderComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const PublicHeader: Story = {
  name: "Public",
  args: {
    isLogged: false,
  },
};

export const LoggedHeader: Story = {
  name: "Logged",
  args: {
    isLogged: true,
  },
};
