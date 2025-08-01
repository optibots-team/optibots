import { create } from 'zustand/react';
import type { AppActions, AppState } from '../types/app.types';

const initialState: AppState = {
	isMenuOpen: false,
}

const useAppStore = create<AppState & AppActions>(
	(set) => ({
		...initialState,
		toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
		openMenu: () => set(() => ({ isMenuOpen: true })),
		closeMenu: () => set(() => ({ isMenuOpen: false })),
		set: (newState) => set((state) => ({ ...state, ...newState })),
		reset: () => set(initialState),
	}),
);

export { useAppStore };