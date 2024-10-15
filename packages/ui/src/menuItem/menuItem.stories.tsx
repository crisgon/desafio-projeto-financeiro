import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem as MenuItemComponent } from ".";

const meta = {
  title: "Components/Menu/MenuItem",
  component: MenuItemComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    handleClick: { action: "clicked" },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof MenuItemComponent>;

export const Default: Story = {
  args: {
    handleClick: () => console.log("clicou no item"),
    children: "Item padrão",
  },
};

export const Active: Story = {
  args: {
    handleClick: () => console.log("clicou no item ativo"),
    children: "Item ativo",
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    handleClick: () => console.log("clicou no item desabilitado"),
    children: "Item desabilitado",
    disabled: true,
  },
};
