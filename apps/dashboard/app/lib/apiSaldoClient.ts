import { BASE_URL } from "./constants";
import type { Saldo } from "./types";

export async function fetchSaldo() {
  const url = `${BASE_URL}/saldo/1`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar saldo: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar saldo:", error);
    throw error;
  }
}

export async function updateSaldo(novoSaldo: Saldo) {
  const url = `${BASE_URL}/saldo/1`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoSaldo),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar saldo: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar saldo:", error);
    throw error;
  }
}
