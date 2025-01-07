import type { GroupedTransaction } from "app/types/transaction";
import { atom } from "recoil";

const extract: GroupedTransaction[] = [];

export const extractState = atom({
  key: "extractState",
  default: extract,
});
