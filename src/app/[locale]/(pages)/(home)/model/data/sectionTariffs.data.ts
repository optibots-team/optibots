import type { TFunction } from '@shared/types/Translations.types';
import type { ITariffCard } from '@features/TariffCard';

export const generateTariffs = (t: TFunction): ITariffCard[] => [
	{
		tariff: 'basic',
		title: t('basic.title'),
		description: t('basic.description'),
		price: 100,
		advantages: t.raw('basic.advantages'),
	},
	{
		tariff: 'pro',
		title: t('pro.title'),
		description: t('pro.description'),
		price: 400,
		advantages: t.raw('pro.advantages'),
	},
	{
		tariff: 'standard',
		title: t('standard.title'),
		description: t('standard.description'),
		price: 250,
		advantages: t.raw('standard.advantages'),
	},
];