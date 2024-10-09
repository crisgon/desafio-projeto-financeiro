import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Select as SelectComponent } from ".";

const meta = {
  title: "Components/Select",
  component: SelectComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} as Meta;

export default meta;
type Story = StoryObj<typeof SelectComponent>;

let value = "none";

export const Select: Story = {
  args: {
    value: "none",
    options: [
      { value: "1", label: "Câmbio de Moeda" },
      { value: "2", label: "DOC/TED" },
      { value: "3", label: "Empréstimo e Financiamento" },
    ],
    onChange: fn(),
    placeholder: "Selecione o tipo de transação",
  },
};
