import { Header as UIHeader } from "@repo/ui/header";
import Menu from "@repo/ui/menu";
import MenuItems from "../menu-items";

export default function Header() {
  const userName = "Joana da Silva Oliveira";

  return (
    <UIHeader isLogged userName={userName}>
      <Menu variant="compact" iconColor="secondary">
        <MenuItems />
      </Menu>
    </UIHeader>
  );
}
