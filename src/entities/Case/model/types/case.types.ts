import type { TelegramHeader, TelegramMessages } from '@entities/Telegram';

export type InternalSlideTheme = 'single' | 'double';

export interface InternalProgress {
	title: string;
	progress: number;
}

interface ExternalSlider {
	header: TelegramHeader;
	messages: TelegramMessages;
}

export interface InternalSlider {
	progress: InternalProgress[];
	result: string[];
}

export interface Case {
	id: string;
	externalSlider: ExternalSlider;
	internalSlider: InternalSlider;
}