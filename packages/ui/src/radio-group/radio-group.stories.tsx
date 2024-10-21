import type { Meta } from "@storybook/react";

import RadioGroup from ".";
import { useState } from "react";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} as Meta;

export default meta;

export const Default = () => {
  const [value, setValue] = useState<string>("deposito");

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <RadioGroup
      label="Tipo de operação"
      inputName="tipo-de-operacao"
      value={value}
      handleChange={(event) => handleChange(event?.target?.value)}
    >
      <>
        <RadioGroup.RadioButton label="Depósito" value="deposito" />
        <RadioGroup.RadioButton label="Transferência" value="transferencia" />
      </>
    </RadioGroup>
  );
};
