export interface Saldo {
  value: number;
}

export interface Transacao {
  type: "deposito" | "transferencia";
  value: number;
}
