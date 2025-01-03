export type TransactionTypes = "cambio" | "emprestimo" | "doc/ted";
export type OperationTypes = "deposito" | "transferencia" | "saque";

export type Transaction = {
  createdAt: string;
  transactionType: TransactionTypes;
  value: number;
  operationType: OperationTypes;
  id: string;
};

export type GroupedTransaction = {
  monthNumber: number;
  year: number;
  transactions: Transaction[];
};
