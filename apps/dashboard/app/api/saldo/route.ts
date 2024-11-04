import { NextResponse } from "next/server";
import { fetchSaldo, updateSaldo } from "../../lib/apiSaldoClient";

export async function GET() {
  try {
    const data = await fetchSaldo();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar saldo." },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { operationType, operationValue } = await req.json();
    const { value } = await fetchSaldo();

    let newBalance;

    if (operationType === "deposito") {
      newBalance = value + operationValue;
    } else {
      newBalance = value - operationValue;
    }

    const data = await updateSaldo({ value: newBalance });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar saldo." },
      { status: 500 },
    );
  }
}
