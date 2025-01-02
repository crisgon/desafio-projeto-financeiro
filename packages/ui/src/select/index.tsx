import {
  Select as MUISelect,
  SelectChangeEvent,
  MenuItem,
  useTheme,
  FormLabel,
  Stack,
} from "@mui/material";

interface SelectProps {
  value?: string;
  label?: string;
  onChange: (e: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

export function Select({
  value,
  onChange,
  options,
  placeholder,
  label,
}: SelectProps) {
  const theme = useTheme();

  return (
    <Stack>
      {label && (
        <FormLabel sx={{ color: theme.palette.primary.dark }}>
          {label}
        </FormLabel>
      )}
      <MUISelect
        value={value ?? "none"}
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
    </Stack>
  );
}
