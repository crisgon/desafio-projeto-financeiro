import {
  Select as MUISelect,
  SelectChangeEvent,
  MenuItem,
  useTheme,
} from "@mui/material";

interface SelectProps {
  onChange: (e: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

export function Select({ onChange, options, placeholder }: SelectProps) {
  const theme = useTheme();

  return (
    <MUISelect
      defaultValue="none"
      onChange={(e) => onChange(e)}
      sx={{ maxWidth: "355px" }}
    >
      <MenuItem value="none" sx={{ display: "none" }}>
        <em>{placeholder}</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{ "&:hover": { backgroundColor: theme.palette.primary.light } }}
        >
          {option.label}
        </MenuItem>
      ))}
    </MUISelect>
  );
}
