import type { ReactNode } from 'react';

export interface ITelegramHeader {
	time?: string;
	chanel: {
		icon: ReactNode;
		iconBg: 'green' | 'blue' | 'gray';
		title: string;
		desc: string;
	}
}

export interface ITelegramMessages {
	userMessage: string;
	botMessage: string;
	steps: string[];
}