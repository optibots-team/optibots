import type { ITelegramHeader, ITelegramMessages } from '@features/Messenger';

export interface IInternalProgress {
	title: string;
	progress: number;
}

interface IExternalSlider {
	header: ITelegramHeader;
	messages: ITelegramMessages;
}

export interface IInternalSlider {
	progress: IInternalProgress[];
	result: string[];
}

export interface ICase {
	id: string;
	externalSlider: IExternalSlider;
	internalSlider: IInternalSlider;
}