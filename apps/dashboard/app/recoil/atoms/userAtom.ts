import type { User } from "app/types/user";
import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {} as User,
});
