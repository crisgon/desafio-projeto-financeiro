import type { Meta, StoryObj } from "@storybook/react";
import { Icons as IconComponent } from ".";

const meta = {
  title: "Components/Icons",
  component: IconComponent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Lista com os ícones disponíveis: https://pictogrammers.github.io/@mdi/font/6.1.95/",
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof IconComponent>;

export const Icons: Story = {
  args: {
    size: 32,
    name: "mdiRocketLaunch",
    color: "#47A138",
  },
};
