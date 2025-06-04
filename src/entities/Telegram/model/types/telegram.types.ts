import type { ReactNode } from 'react';

export interface TelegramHeader {
	time?: string;
	chanel: {
		icon: ReactNode;
		iconBg: 'green' | 'blue' | 'gray';
		title: string;
		desc: string;
	};
}

export interface TelegramMessages {
	userMessage: string;
	botMessage: string;
	steps: string[];
}