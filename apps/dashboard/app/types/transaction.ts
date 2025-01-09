export type TransactionTypes = "cambio" | "emprestimo" | "doc/ted";
export type OperationTypes = "deposito" | "transferencia" | "saque";
export type TransactionType = "Debit" | "Credit";

export type Transaction = {
  id: string;
  accountId: string;
  type: TransactionType;
  value: number;
  date: Date;
};

export type TransactionState = {
  data: Transaction[];
  isLoading: boolean;
  error: boolean;
};

export type GroupedTransaction = {
  monthNumber: number;
  year: number;
  transactions: Transaction[];
};
