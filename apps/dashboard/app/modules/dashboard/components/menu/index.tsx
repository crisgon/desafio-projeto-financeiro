import { Box } from "@mui/material";
import Menu from "@repo/ui/menu";
import { styles } from "./styles";

export default function MenuComponent() {
  return (
    <Box sx={styles.menu}>
      <Menu.MenuItem sx={styles.menuItem} handleClick={() => console.log("")}>
        Início
      </Menu.MenuItem>
      <Menu.MenuItem sx={styles.menuItem} handleClick={() => console.log("")}>
        Transferências
      </Menu.MenuItem>
      <Menu.MenuItem sx={styles.menuItem} handleClick={() => console.log("")}>
        Investimentos
      </Menu.MenuItem>
      <Menu.MenuItem
        sx={{
          ...styles.menuItem,
          border: "none",
        }}
        handleClick={() => console.log("")}
      >
        Outros serviços
      </Menu.MenuItem>
    </Box>
  );
}
