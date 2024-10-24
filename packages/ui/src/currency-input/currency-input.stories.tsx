import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { CurrencyInput } from ".";

const meta = {
  title: "Components/CurrencyInput",
  component: CurrencyInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof CurrencyInput>;

export const Default: Story = {
  args: {
    label: "Valor",
    defaultValue: "0,00",
    onChange: fn(),
  },
};
