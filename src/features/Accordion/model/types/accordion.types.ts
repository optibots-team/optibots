import type { ReactNode } from 'react';

export interface AccordionItem {
	title: string;
	content: string | ReactNode;
	defaultOpen?: boolean;
}