import { NextResponse } from "next/server";
import { fetchTransacoes, createTransacao } from "../../lib/apiTransacaoClient";
import { sortTransactions } from "modules/utils/sortTransactions";

export async function GET() {
  try {
    const data = await fetchTransacoes();
    return NextResponse.json(sortTransactions(data));
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar transações." },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const newTransacao = await req.json();
    const data = await createTransacao(newTransacao);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar transação." },
      { status: 500 },
    );
  }
}
