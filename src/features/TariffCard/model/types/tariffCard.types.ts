import type { Tariff } from '@entities/Tariff';

export interface ITariffCard {
	tariff: Tariff;
	title: string;
	description: string;
	price: number | string;
	advantages: string[];
}