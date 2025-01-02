import { atom } from "recoil";

export const transactionTypesState = atom({
  key: "transactionTypesState",
  default: ["Câmbio de Moeda", "DOC/TED", "Empréstimo e Financiamento"],
});
