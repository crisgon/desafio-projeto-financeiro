import { MenuItem as MUIMenuItem, SxProps, Theme } from "@mui/material";
import React from "react";
import type { MenuProps } from "../menu";

interface MenuItemProps extends Omit<MenuProps, "variant"> {
  sx?: SxProps<Theme>;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactElement | string;
  handleClick: () => void;
}

export function MenuItem({
  children,
  active,
  disabled,
  handleClick,
  sx,
}: MenuItemProps): JSX.Element {
  return (
    <MUIMenuItem
      sx={sx}
      onClick={handleClick}
      className={`menu-item-menu-component ${active ? "active" : ""}`}
      disabled={disabled}
    >
      {children}
    </MUIMenuItem>
  );
}
