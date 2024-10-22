import { Menu as MUIMenu, SxProps, Theme, useTheme } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { MenuItem } from "../menuItem";
import { menuOverrides } from "./menu.styles";
import { IconButton } from "../iconButton";

export interface MenuProps {
  variant: "full" | "compact";
  iconColor?: "primary" | "secondary";
  children: React.ReactElement | string;
  anchorElem?: HTMLElement | null;
  sx?: SxProps<Theme>;
}

function Menu({
  variant,
  children,
  anchorElem,
  iconColor = "primary",
  sx,
}: MenuProps): JSX.Element {
  const theme = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(
    anchorElem || null,
  );
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

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
      setIsMobile(window.innerWidth < 720);
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
        sx={sx}
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
              "@media (min-width: 720px)": {
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
