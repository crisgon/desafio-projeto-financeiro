import type { Transaction } from "app/types/transaction";
import { atom } from "recoil";

export const transactionsState = atom({
  key: "transactionsState",
  default: {
    data: [] as Transaction[],
    isLoading: true,
    error: false,
  },
});
