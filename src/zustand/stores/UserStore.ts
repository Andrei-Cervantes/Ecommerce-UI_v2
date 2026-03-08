import type { IUser } from "@/types/IUser";
import { create } from "zustand";

interface UserState {
  user: IUser | null;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
