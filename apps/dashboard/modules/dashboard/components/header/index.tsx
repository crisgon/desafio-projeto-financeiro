import { Header as UIHeader } from "@repo/ui/header";
import Menu from "@repo/ui/menu";
import MenuItems from "../menu-items";
import { useHeader } from "./useHeader.hook";

export default function Header() {
  const { userName } = useHeader();

  return (
    <UIHeader isLogged userName={userName}>
      <Menu variant="compact" iconColor="secondary">
        <MenuItems />
      </Menu>
    </UIHeader>
  );
}
