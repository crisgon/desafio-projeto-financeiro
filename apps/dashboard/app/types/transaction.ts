export type Transaction = {
  createdAt: string;
  transactionType: "cambio" | "emprestimo" | "doc/ted";
  value: number;
  operationType: "deposito" | "transferencia" | "saque";
  id: string;
};

export type GroupedTransaction = {
  monthNumber: number;
  year: number;
  transactions: Transaction[];
};
