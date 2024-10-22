export interface CreateTransactionProps {
  transactionType: string;
  value: number;
  operationType: string;
}

export interface DashboardContextProps {
  isMobile: boolean;
  loading: boolean;
  balance: number;
  createTransaction: ({
    transactionType,
    operationType,
    value,
  }: CreateTransactionProps) => Promise<void>;
}
