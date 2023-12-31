import { create } from "zustand";

type State = {
  dark: boolean;
  openSideBar: boolean;
  alert: boolean;
};

type Action = {
  updateDarkMode: (dark: boolean) => void;
  updateOpenSideBar: (dark: boolean) => void;
  updateAlert: (alert: boolean) => void;
};

export const useStore = create<State & Action>((set) => ({
  dark: false,
  updateDarkMode: (dark) => set(() => ({ dark: dark })),
  openSideBar: false,
  updateOpenSideBar: (openSidebar) => set(() => ({ openSideBar: openSidebar })),
  alert: false,
  updateAlert: (alert) => set(() => ({ alert: alert })),
}));
