import { NextResponse } from "next/server";
import {
  updateTransacao,
  deleteTransacao,
} from "../../../lib/apiTransacaoClient";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const updatedTransacao = await req.json();
    const data = await updateTransacao(params.id, updatedTransacao);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar transação." },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    await deleteTransacao(params.id);
    return NextResponse.json({ message: "Transação deletada com sucesso." });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar transação." },
      { status: 500 },
    );
  }
}
