import { atom } from "recoil";

export const transactionsState = atom({
  key: "transactionsState",
  default: {
    data: [],
    isLoading: false,
    error: false,
  },
});
