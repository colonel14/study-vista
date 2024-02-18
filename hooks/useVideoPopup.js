import { create } from "zustand";

const useVideoPopup = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useVideoPopup;
