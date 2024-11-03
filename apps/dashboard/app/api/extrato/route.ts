import { NextResponse } from "next/server";
import { fetchTransacoes } from "../../lib/apiTransacaoClient";

type Transaction = {
  createdAt: string;
  transactionType: "cambio" | "emprestimo" | "doc/ted";
  value: number;
  operationType: "deposito" | "transferencia";
  id: string;
};

type GroupedTransaction = {
  monthNumber: number;
  year: number;
  transactions: Transaction[];
};

function groupTransactionsByMonth(
  transactions: Transaction[],
): GroupedTransaction[] {
  const groupedByMonth = new Map<string, GroupedTransaction>();

  transactions.forEach((transaction) => {
    const date = new Date(transaction.createdAt);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const monthKey = `${year}-${month}`;

    if (!groupedByMonth.has(monthKey)) {
      groupedByMonth.set(monthKey, {
        monthNumber: month,
        year,
        transactions: [],
      });
    }

    groupedByMonth.get(monthKey)!.transactions.push(transaction);
  });

  groupedByMonth.forEach((group) => {
    group.transactions.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );
  });

  return Array.from(groupedByMonth.values()).sort(
    (a, b) => b.year - a.year || a.monthNumber - b.monthNumber,
  );
}

export async function GET() {
  try {
    const api_response = await fetchTransacoes(8);
    const data = groupTransactionsByMonth(api_response);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar extrato." },
      { status: 500 },
    );
  }
}
