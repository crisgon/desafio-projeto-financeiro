import { BASE_URL } from "./constants";
import type { EditTransacao, Transacao } from "./types";

export async function fetchTransacoes(size?: number) {
  const url = `${BASE_URL}/transacao`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar transações: ${response.status}`);
    }

    const data = await response.json();
    return size ? data.slice(0, size) : data;
  } catch (error) {
    console.error("Erro ao buscar transações:", error);
    throw error;
  }
}

export async function createTransacao(novaTransacao: Transacao) {
  const url = `${BASE_URL}/transacao`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaTransacao),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar transação: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar transação:", error);
    throw error;
  }
}

export async function updateTransacao(
  id: string,
  transacaoAtualizada: EditTransacao,
) {
  const url = `${BASE_URL}/transacao/${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transacaoAtualizada),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar transação: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar transação:", error);
    throw error;
  }
}

export async function deleteTransacao(id: string) {
  const url = `${BASE_URL}/transacao/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar transação: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Erro ao deletar transação:", error);
    throw error;
  }
}
