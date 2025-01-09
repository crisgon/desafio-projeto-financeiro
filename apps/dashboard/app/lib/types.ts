import type { TransactionTypes } from "app/types/transaction";

export interface Saldo {
  value: number;
}

export interface EditTransacao {
  id: string;
  value: number;
  type: TransactionTypes;
}
