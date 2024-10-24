export interface CreateTransactionProps {
  transactionType: string;
  value: number;
  operationType: string;
}

export interface DashboardContextProps {
  loading: boolean;
  balance: number;
  createTransaction: ({
    transactionType,
    operationType,
    value,
  }: CreateTransactionProps) => Promise<void>;
}
