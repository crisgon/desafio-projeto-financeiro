import { Meta, StoryObj } from "@storybook/react";
import { Illustration as IllustrationComponent } from ".";

const meta = {
  title: "Components/Illustration",
  component: IllustrationComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Define a ilustração a ser apresentada",
      control: "select",
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof IllustrationComponent>;

export const Illustration: Story = {
  args: {
    name: "error404",
  },
};
