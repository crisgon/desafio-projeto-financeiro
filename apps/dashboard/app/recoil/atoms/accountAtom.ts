import type { Account } from "app/types/account";
import { atom } from "recoil";

export const accountState = atom({
  key: "accountState",
  default: {} as Account,
});
