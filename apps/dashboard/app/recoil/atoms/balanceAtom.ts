import { atom } from "recoil";

export const balanceState = atom({
  key: "balanceState",
  default: {
    data: {
      value: "0",
    },
    isLoading: true,
  },
});
