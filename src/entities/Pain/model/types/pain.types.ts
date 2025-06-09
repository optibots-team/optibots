import type { ReactNode } from 'react';

export interface Pain {
	id: 'routine' | 'loss' | 'conversion' | 'errors' | 'competitors';
	icon: ReactNode;
	title: string;
	desc: string;
}