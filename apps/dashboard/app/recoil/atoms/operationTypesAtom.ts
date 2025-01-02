import { atom } from "recoil";

export const operationTypesState = atom({
  key: "operationTypesState",
  default: ["Saque", "Transferência", "Depósito"],
});
