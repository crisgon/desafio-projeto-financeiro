export interface Saldo {
  value: number;
}

export interface Transacao {
  type: "deposito" | "transferencia";
  value: number;
}

export interface EditTransacao {
  id: string;
  value: number;
  operationType: string;
  transactionType: string;
}
