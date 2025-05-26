import type { ReactNode } from 'react';

export interface IAccordionItem {
	title: string;
	content: string | ReactNode;
	defaultOpen?: boolean;
}