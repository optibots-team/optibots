export interface AppState {
	isMenuOpen: boolean;
}

export interface AppActions {
	set: (newState: Partial<AppState>) => void;
	toggleMenu: () => void;
	openMenu: () => void;
	closeMenu: () => void;
	reset: () => void;
}