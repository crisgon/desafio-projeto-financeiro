import type { Meta, StoryObj } from "@storybook/react";
import Menu from "."; // Ajuste o caminho para onde está o componente Menu

const meta = {
  title: "Components/Menu/MenuItem",
  component: Menu.MenuItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Menu Item",
  },
  argTypes: {
    handleClick: { action: "clicked" },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

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
