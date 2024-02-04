import { create } from "zustand";

type coverImgageStore = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const useCoverImage = create<coverImgageStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
