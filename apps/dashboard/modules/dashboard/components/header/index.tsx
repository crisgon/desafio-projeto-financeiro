import { Header as UIHeader } from "@repo/ui/header";
import Menu from "@repo/ui/menu";
import MenuItems from "../menu-items";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";
import { useEffect } from "react";
import { fetcher } from "app/services";
import { transactionsState } from "app/recoil/atoms/transactionsAtom";
import { extractState } from "app/recoil/atoms/extractAtom";
import { groupTransactionsByMonth } from "modules/utils/groupTransactionsByMonth";

export default function Header() {
  const userName = "Joana da Silva Oliveira";
  const { data, isLoading, error } = useSWR("/api/transacao", fetcher);
  const setTransactions = useSetRecoilState(transactionsState);
  const setExtract = useSetRecoilState(extractState);

  useEffect(() => {
    setTransactions({
      isLoading,
      error,
      data,
    });

    if (!isLoading && data) {
      setExtract(groupTransactionsByMonth(data.slice(0, 8)));
    }
  }, [isLoading, error, data]);

  return (
    <UIHeader isLogged userName={userName}>
      <Menu variant="compact" iconColor="secondary">
        <MenuItems />
      </Menu>
    </UIHeader>
  );
}
