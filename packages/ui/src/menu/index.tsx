import {
  Box,
  MenuItem as MUIMenuItem,
  Menu as MUIMenu,
  IconButton,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Icons } from "../icons";

interface MenuProps {
  variant: "full" | "compact";
  children: React.ReactElement | string;
  anchorElem?: HTMLElement | null;
}

interface MenuItemProps extends Omit<MenuProps, "variant"> {
  active?: boolean;
  disabled?: boolean;
  children: React.ReactElement | string;
  handleClick: () => void;
}

function MenuItem({
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

function Menu({ variant, children, anchorElem }: MenuProps): JSX.Element {
  const theme = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(
    anchorElem || null,
  );
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(width >= 720);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuIsOpen(false);
  };

  const liDefaultStyles = {
    borderBottom: "1px solid #000",
    justifyContent: "center",
    padding: "16px",
    margin: "0 16px",
  };

  const liStyles =
    variant === "compact" || width < 720
      ? {
          "&:last-child": {
            borderBottom: "1px solid transparent",
          },
        }
      : {
          borderBottom: "1px solid transparent",
        };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width < 720 && (
        <IconButton
          aria-label="open menu"
          id="open-menu-button"
          aria-controls={menuIsOpen ? "menu" : undefined}
          aria-expanded={menuIsOpen ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Icons
            name="mdiMenu"
            color={theme.palette.secondary.main}
            size={32}
          />
        </IconButton>
      )}
      <MUIMenu
        id="menu"
        MenuListProps={{
          "aria-labelledby": `${menuIsOpen ? "open" : "close"}-menu-button`,
        }}
        anchorEl={anchorElem || anchorEl}
        open={menuIsOpen}
        onClose={width < 720 ? handleClose : undefined}
        slotProps={{
          paper: {
            sx: {
              boxShadow: "none",
              border: "none",
              backgroundColor: theme.palette.background.default,
              borderRadius: 0,
              padding: "18px",
              ul: {
                padding: "0px",
                display: "flex",
                flexDirection: "column",
              },
              li: {
                ...liDefaultStyles,
                ...liStyles,
              },
              "@media (min-width: 720px)": {
                backgroundColor: "transparent",
                padding: "0px",
                width: "100%",
                display: "flex",
                justifyContent: "center",

                ul: {
                  display: "flex",
                  flexDirection: variant === "full" ? "row" : "column",
                },
              },
              "@media (max-width: 720px)": {
                top: "0 !important",
                left: "0 !important",
              },
            },
          },
        }}
      >
        {width < 720 && (
          <IconButton
            aria-label="close menu"
            id="close-menu-button"
            aria-controls={menuIsOpen ? "menu" : undefined}
            aria-expanded={menuIsOpen ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClose}
            sx={{ alignSelf: "flex-end", padding: "0px" }}
          >
            <Icons
              name="mdiClose"
              color={theme.palette.primary.main}
              size={24}
            />
          </IconButton>
        )}
        {children}
      </MUIMenu>
    </>
  );
}

Menu.MenuItem = MenuItem;

export default Menu;
