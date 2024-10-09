import {
  Select as MUISelect,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";

interface SelectProps {
  onChange: (e: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

export function Select({ onChange, options, placeholder }: SelectProps) {
  return (
    <MUISelect defaultValue="none" onChange={(e) => onChange(e)}>
      <MenuItem value="none" sx={{ display: "none" }}>
        <em>{placeholder}</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MUISelect>
  );
}
