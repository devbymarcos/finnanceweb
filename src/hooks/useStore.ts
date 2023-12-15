import { create } from "zustand";

type State = {
  dark: boolean;
  openSideBar: boolean;
};

type Action = {
  updateDarkMode: (dark: boolean) => void;
  updateOpenSideBar: (dark: boolean) => void;
};

export const useStore = create<State & Action>((set) => ({
  dark: false,
  updateDarkMode: (dark) => set(() => ({ dark: dark })),
  openSideBar: false,
  updateOpenSideBar: (openSidebar) => set(() => ({ openSideBar: openSidebar })),
}));
