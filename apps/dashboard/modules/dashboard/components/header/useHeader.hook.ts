import { balanceState } from "app/recoil/atoms/balanceAtom";
import { extractState } from "app/recoil/atoms/extractAtom";
import { transactionsState } from "app/recoil/atoms/transactionsAtom";
import { fetcher } from "app/services";
import { groupTransactionsByMonth } from "modules/utils/groupTransactionsByMonth";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";

export const useHeader = () => {
  const { data, isLoading, error } = useSWR("/api/transacao", fetcher);
  const { data: balanceData, isLoading: balanceIsLoading } = useSWR(
    "/api/saldo",
    fetcher,
  );
  const userName = "Joana da Silva Oliveira";

  const setTransactions = useSetRecoilState(transactionsState);
  const setExtract = useSetRecoilState(extractState);
  const setBalance = useSetRecoilState(balanceState);

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

  useEffect(() => {
    setBalance({
      isLoading: balanceIsLoading,
      data: balanceData,
    });
  }, [balanceIsLoading, balanceData]);

  return { userName };
};
