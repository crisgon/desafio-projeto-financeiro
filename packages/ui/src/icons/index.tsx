import { Icon } from "@iconify/react";
import { useTheme } from "@mui/material";
import type { IconNames } from "./iconNames";
import { iconNameParser } from "./utils/iconNameParser";

export interface IconProps {
  name: IconNames;
  color?: string;
  size?: number;
  styles?: React.CSSProperties;
}

export function Icons({
  name,
  size = 16,
  color,
  styles,
}: IconProps): JSX.Element {
  const theme = useTheme();
  const sizeToRem = size / 16;
  const iconName = iconNameParser(name);

  return (
    <Icon
      icon={iconName}
      style={{
        ...styles,
        fontSize: `${sizeToRem}rem`,
      }}
      color={color || theme.palette.common.white}
    />
  );
}
