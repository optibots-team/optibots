import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

export interface Advantage {
	id: 'support' | 'turnkey'| 'analytics' | 'automatic' | 'integration' | 'structure';
	title: string;
	subtitle: string;
	icon: ReactNode;
	bg?: 'light' | 'green';
	image?: StaticImageData;
}