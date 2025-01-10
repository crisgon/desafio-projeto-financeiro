import type { Transaction } from "app/types/transaction";
import { atom } from "recoil";

export const transactionsState = atom({
  key: "transactionsState",
  default: [] as Transaction[],
});
