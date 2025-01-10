import { accountState } from "app/recoil/atoms/accountAtom";
import { userState } from "app/recoil/atoms/userAtom";
import { getAccountRequest } from "app/services/account";
import type { Account } from "app/types/account";
import type { User } from "app/types/user";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useSWRMutation from "swr/mutation";

export const useAccount = () => {
  const user = useRecoilValue<User>(userState);

  const [cookies] = useCookies(["userToken"]);

  const setAccount = useSetRecoilState(accountState);

  const {
    data: accounts,
    isMutating: accountsIsLoading,
    trigger: getAccount,
  } = useSWRMutation(
    {
      url: "/account",
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
      },
    },
    getAccountRequest,
  );

  useEffect(() => {
    if (!accountsIsLoading && accounts) {
      setAccount(
        accounts.data.result.account.find(
          (account: Account) => account.userId === user.id,
        ),
      );
    }
  }, [accountsIsLoading, accounts]);

  return { getAccount };
};
