import {
  IconButton as MUIIconButton,
  IconButtonProps as MUIIconButtonProps,
  useTheme,
} from "@mui/material";
import { IconProps, Icons } from "../icons";

export interface IconButtonProps extends MUIIconButtonProps {
  icon: IconProps["name"];
  iconColor?: string;
  iconSize?: number;
  variant?: "default" | "dark";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export function IconButton({
  icon,
  iconColor,
  iconSize,
  variant = "default",
  disabled = false,
  onClick,
  ...props
}: IconButtonProps): JSX.Element {
  const theme = useTheme();
  const size = variant === "default" ? 20 : 30;

  return (
    <MUIIconButton
      {...props}
      onClick={onClick}
      disabled={disabled}
      sx={{
        padding: variant === "dark" ? "0px !important" : "8px !important",
        backgroundColor:
          variant === "default" ? theme.palette.action.active : "transparent",
        ...props.sx,
      }}
    >
      <Icons
        name={icon}
        color={iconColor || theme.palette.common.white}
        size={iconSize || size}
      />
    </MUIIconButton>
  );
}
