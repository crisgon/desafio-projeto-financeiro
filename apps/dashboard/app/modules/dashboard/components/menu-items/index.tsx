import { usePathname } from "next/navigation";
import Menu from "@repo/ui/menu";
import { styles } from "./styles";

export default function MenuItems() {
  const pathname = usePathname();

  return (
    <>
      <Menu.MenuItem
        sx={styles.menuItem}
        handleClick={() => console.log("")}
        active={pathname === "/"}
      >
        Início
      </Menu.MenuItem>
      <Menu.MenuItem
        sx={styles.menuItem}
        handleClick={() => console.log("")}
        disabled
      >
        Transferências
      </Menu.MenuItem>
      <Menu.MenuItem
        sx={styles.menuItem}
        handleClick={() => console.log("")}
        disabled
      >
        Investimentos
      </Menu.MenuItem>
      <Menu.MenuItem
        sx={{
          ...styles.menuItem,
          border: "none",
        }}
        handleClick={() => console.log("")}
        disabled
      >
        Outros serviços
      </Menu.MenuItem>
    </>
  );
}
