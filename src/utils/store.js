import { create } from "zustand";

export const useStore = create((set) => ({
  showMobileNav: null,
  toggleMobileNav: (isSHow) => set((state) => ({ showMobileNav: isSHow })),
}));
