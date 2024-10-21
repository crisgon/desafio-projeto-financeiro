import type { ChangeEvent } from "react";
import {
  RadioGroup as MUIRadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

interface RadioGroupProps {
  label: string;
  inputName: string;
  value: string;
  children: React.ReactElement;
  handleChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

interface RadioButtonProps {
  label: string;
  value: string;
}

function RadioButton({ value, label }: RadioButtonProps) {
  return <FormControlLabel value={value} control={<Radio />} label={label} />;
}

function RadioGroup({
  label,
  inputName,
  value,
  children,
  handleChange,
}: RadioGroupProps) {
  return (
    <FormControl>
      <FormLabel id={`radio-group-${inputName}`}>{label}</FormLabel>
      <MUIRadioGroup
        row
        aria-labelledby={`radio-group-${inputName}`}
        name={inputName}
        value={value}
        onChange={handleChange}
      >
        {children}
      </MUIRadioGroup>
    </FormControl>
  );
}

RadioGroup.RadioButton = RadioButton;

export default RadioGroup;
