import type { AppState, AppActions } from '../types/app.types';

export const selectIsMenuOpen = (state: AppState) => state.isMenuOpen;
export const selectToggleMenu = (state: AppActions) => state.toggleMenu;
export const selectOpenMenu = (state: AppActions) => state.openMenu;
export const selectCloseMenu = (state: AppActions) => state.closeMenu;
export const selectSet = (state: AppActions) => state.set;