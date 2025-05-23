export type ITariff = 'basic' | 'pro' | 'standard';

export interface ITariffCard {
	tariff: ITariff;
	title: string;
	description: string;
	price: number | string;
	advantages: string[];
}