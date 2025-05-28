import type { ITelegramHeader, ITelegramMessages } from '@features/Messenger';

export interface ICase {
	id: string;
	header: ITelegramHeader;
	messages: ITelegramMessages;
}