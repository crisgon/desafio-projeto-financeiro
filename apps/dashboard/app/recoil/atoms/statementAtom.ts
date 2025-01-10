import type { GroupedTransaction } from "app/types/transaction";
import { atom } from "recoil";

const statement: GroupedTransaction[] = [];

export const statementState = atom({
  key: "statementState",
  default: statement,
});
