// filepath: app/lib/store.ts
import { create } from "zustand";

type SearchStore = {
  search: string;
  setSearch: (q: string) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  setSearch: (q) => set({ search: q }),
}));