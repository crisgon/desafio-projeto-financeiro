import {
  Button as MUIButton,
  Typography,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

export interface ButtonProps {
  label: string;
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary" | "tertiary" | "error" | "contrast";
  disabled?: boolean;
  sx?: MUIButtonProps["sx"];
  onClick: () => void;
  isLoading?: boolean;
}

export function Button({
  label,
  variant = "contained",
  color = "primary",
  disabled = false,
  onClick,
  sx,
  isLoading,
}: ButtonProps): JSX.Element {
  return (
    <MUIButton
      variant={variant as MUIButtonProps["variant"]}
      color={color as MUIButtonProps["color"]}
      disabled={disabled ?? isLoading}
      onClick={onClick}
      sx={sx}
    >
      <Typography variant="body1">
        {isLoading ? "Carregando..." : label}
      </Typography>
    </MUIButton>
  );
}
