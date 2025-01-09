import { accountState } from "app/recoil/atoms/accountAtom";
import { balanceState } from "app/recoil/atoms/balanceAtom";
import { transactionsState } from "app/recoil/atoms/transactionsAtom";
import { userState } from "app/recoil/atoms/userAtom";
import { fetcher } from "app/services";
import { getAccountsRequest } from "app/services/account";
import type { Account } from "app/types/account";
import type { User } from "app/types/user";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useSWR from "swr";

export const useAccount = () => {
  const user = useRecoilValue<User>(userState);

  const [cookies] = useCookies(["userToken"]);

  const setTransactions = useSetRecoilState(transactionsState);
  const setAccount = useSetRecoilState(accountState);
  const setBalance = useSetRecoilState(balanceState);

  const { data: balanceData, isLoading: balanceIsLoading } = useSWR(
    "/api/saldo",
    fetcher,
  );

  const {
    data: accounts,
    isLoading: accountsIsLoading,
    error: accountsError,
  } = useSWR(
    {
      url: "/account",
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
      },
    },
    getAccountsRequest,
  );

  useEffect(() => {
    setBalance({
      isLoading: !balanceData || balanceIsLoading,
      data: balanceData,
    });
  }, [balanceIsLoading, balanceData]);

  useEffect(() => {
    setTransactions({
      isLoading: !accounts || accountsIsLoading,
      error: accountsError,
      data: accounts ? accounts.data.result.transactions : undefined,
    });

    if (!accountsIsLoading && accounts) {
      setAccount(
        accounts.data.result.account.find(
          (account: Account) => account.userId === user.id,
        ),
      );
    }
  }, [accountsIsLoading, accounts]);
};
