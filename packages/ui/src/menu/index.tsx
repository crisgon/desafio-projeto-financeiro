import { Menu as MUIMenu, useTheme } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { MenuItem } from "../menuItem";
import { menuOverrides } from "./menu.styles";
import { IconButton } from "../iconButton";

export interface MenuProps {
  variant: "full" | "compact";
  iconColor?: "primary" | "secondary";
  children: React.ReactElement | string;
  anchorElem?: HTMLElement | null;
}

const MOBILE_SIZE = 720;

function Menu({
  variant,
  children,
  anchorElem,
  iconColor = "primary",
}: MenuProps): JSX.Element {
  const theme = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_SIZE);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(
    anchorElem || null,
  );
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(width >= MOBILE_SIZE);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuIsOpen(false);
  };

  const liStyles = useMemo(
    () =>
      variant === "compact" || isMobile
        ? {
            "&:last-child": {
              borderBottom: "1px solid transparent",
            },
          }
        : {
            borderBottom: "1px solid transparent",
          },
    [isMobile],
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth < MOBILE_SIZE);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <IconButton
          aria-label="open menu"
          id="open-menu-button"
          aria-controls={menuIsOpen ? "menu" : undefined}
          aria-expanded={menuIsOpen ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          icon="mdiMenu"
          iconColor={theme.palette[iconColor].main}
          iconSize={32}
          variant="dark"
        />
      )}
      <MUIMenu
        id="menu"
        MenuListProps={{
          "aria-labelledby": `${menuIsOpen ? "open" : "close"}-menu-button`,
        }}
        anchorEl={anchorElem || anchorEl}
        open={menuIsOpen}
        onClose={isMobile ? handleClose : undefined}
        slotProps={{
          paper: {
            sx: {
              ...menuOverrides,
              li: {
                ...menuOverrides.li,
                ...liStyles,
              },
              [`@media (min-width: ${MOBILE_SIZE}px)`]: {
                ul: {
                  display: "flex",
                  flexDirection: variant === "full" ? "row" : "column",
                },
              },
            },
          },
        }}
      >
        {isMobile && (
          <IconButton
            aria-label="close menu"
            id="close-menu-button"
            aria-controls={menuIsOpen ? "menu" : undefined}
            aria-expanded={menuIsOpen ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClose}
            icon="mdiClose"
            iconColor={theme.palette.primary.main}
            iconSize={24}
            variant="dark"
            sx={{ alignSelf: "flex-end", padding: "0px" }}
          />
        )}
        {children}
      </MUIMenu>
    </>
  );
}

Menu.MenuItem = MenuItem;

export default Menu;
