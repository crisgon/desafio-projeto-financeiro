import { MenuItem as MUIMenuItem } from "@mui/material";
import React from "react";
import type { MenuProps } from "../menu";

interface MenuItemProps extends Omit<MenuProps, "variant"> {
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
}: MenuItemProps): JSX.Element {
  return (
    <MUIMenuItem
      onClick={handleClick}
      className={`menu-item-menu-component ${active ? "active" : ""}`}
      disabled={disabled}
    >
      {children}
    </MUIMenuItem>
  );
}
