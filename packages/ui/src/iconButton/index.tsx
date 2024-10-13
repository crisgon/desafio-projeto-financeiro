import { IconButton as MUIIconButton, useTheme } from "@mui/material";
import { IconProps, Icons } from "../icons";

export interface IconButtonProps {
  icon: IconProps["name"];
  variant?: "default" | "dark";
  disabled?: boolean;
  onClick: () => void;
}

export function IconButton({
  icon,
  variant = "default",
  disabled = false,
  onClick,
}: IconButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <MUIIconButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        backgroundColor:
          variant === "default"
            ? theme.palette.action.active
            : theme.palette.common.black,
      }}
    >
      <Icons name={icon} color={theme.palette.common.white} size={20} />
    </MUIIconButton>
  );
}
