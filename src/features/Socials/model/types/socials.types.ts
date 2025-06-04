import type { ReactNode } from 'react';

export type SocialNames = 'telegram' | 'instagram' | 'linkedin' | 'youtube';

export interface Social {
	name: SocialNames;
	icon: ReactNode;
	url: string;
}