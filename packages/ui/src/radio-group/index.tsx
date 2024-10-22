import type { ChangeEvent } from "react";
import {
  RadioGroup as MUIRadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  useTheme,
  type SxProps,
  type Theme,
} from "@mui/material";

interface RadioGroupProps {
  label: string;
  inputName: string;
  value: string;
  children: React.ReactElement;
  handleChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  sx?: SxProps<Theme>;
}

interface RadioButtonProps {
  label: string;
  value: string;
}

function RadioButton({ value, label }: RadioButtonProps) {
  const theme = useTheme();

  return (
    <FormControlLabel
      sx={{ color: theme.palette.common.black }}
      value={value}
      control={<Radio />}
      label={label}
    />
  );
}

function RadioGroup({
  label,
  inputName,
  value,
  children,
  handleChange,
  sx,
}: RadioGroupProps) {
  return (
    <FormControl sx={sx}>
      <FormLabel id={`radio-group-${inputName}`}>{label}</FormLabel>
      <MUIRadioGroup
        row
        aria-labelledby={`radio-group-${inputName}`}
        name={inputName}
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: "white",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid rgba(0, 0, 0, 0.23)",
        }}
      >
        {children}
      </MUIRadioGroup>
    </FormControl>
  );
}

RadioGroup.RadioButton = RadioButton;

export default RadioGroup;
