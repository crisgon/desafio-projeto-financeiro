import {
  Button as MUIButton,
  Typography,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

export interface ButtonProps {
  label: string;
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary" | "tertiary" | "error";
  disabled?: boolean;
  onClick: () => void;
}

export function Button({
  label,
  variant = "contained",
  color = "primary",
  disabled = false,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <MUIButton
      variant={variant as MUIButtonProps["variant"]}
      color={color as MUIButtonProps["color"]}
      disabled={disabled}
      onClick={onClick}
    >
      <Typography variant="body1">{label}</Typography>
    </MUIButton>
  );
}
