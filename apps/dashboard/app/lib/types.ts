import type { TransactionTypes } from "app/types/transaction";

export interface EditTransacao {
  id: string;
  value: number;
  type: TransactionTypes;
}
