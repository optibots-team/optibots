import type { ReactNode } from 'react';

export interface AccordionItem {
	id: 'implemented' | 'additional' | 'manage' | 'necessity';
	title: string;
	content: string | ReactNode;
	defaultOpen?: boolean;
}