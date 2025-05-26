import type { ReactNode } from 'react';

export type ISocialNames = 'telegram' | 'instagram' | 'linkedin' | 'youtube';

export interface ISocial {
	name: ISocialNames;
	icon: ReactNode;
	url: string;
}