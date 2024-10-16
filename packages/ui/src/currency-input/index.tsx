import { Stack, TextField, FormLabel, useTheme } from "@mui/material";
import { useState } from "react";

interface CurrencyInputProps {
  label?: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

export function formatCurrency(value: string) {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100);
}

export function CurrencyInput({
  label,
  defaultValue,
  onChange,
}: CurrencyInputProps) {
  const [value, setValue] = useState(defaultValue);
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d]/g, ""); // Remove tudo que não é número
    const formattedValue = formatCurrency(inputValue);
    setValue(formattedValue);
    onChange(inputValue);
  };

  return (
    <Stack spacing="16px">
      {label && (
        <FormLabel sx={{ color: theme.palette.primary.light }}>
          {label}
        </FormLabel>
      )}
      <TextField
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            background: theme.palette.common.white,
            borderRadius: "8px",
            "& fieldset": {
              borderColor: theme.palette.action.active,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.action.active,
            },
          },
        }}
        InputProps={{
          inputProps: {
            style: { textAlign: "center" },
          },
        }}
      />
    </Stack>
  );
}
