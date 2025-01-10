import { Header as UIHeader } from "@repo/ui/header";
import Menu from "@repo/ui/menu";
import MenuItems from "../menu-items";
import { useRecoilValue } from "recoil";
import { userState } from "app/recoil/atoms/userAtom";
import type { User } from "app/types/user";
import { useLogin } from "modules/hooks/useLogin.hook";
import { useAccount } from "modules/hooks/useAccount.hook";
import { useEffect } from "react";

export default function Header() {
  useLogin();
  const { getAccount } = useAccount();

  const user = useRecoilValue<User>(userState);

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <UIHeader isLogged userName={user.username || ""}>
      <Menu variant="compact" iconColor="secondary">
        <MenuItems />
      </Menu>
    </UIHeader>
  );
}
