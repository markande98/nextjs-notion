import { create } from "zustand";

type coverImgageStore = {
  url?: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onReplace: (url: string) => void;
};

export const useCoverImage = create<coverImgageStore>((set) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: (url: string) => set({ isOpen: true, url }),
}));
