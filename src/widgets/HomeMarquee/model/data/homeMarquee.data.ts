import type { MarqueeCard } from '@features/Marquee';
import type { TFunction } from '@shared/types/translations.types';
import marqueeImg_01 from '@shared/assets/images/home-page/marquee/marquee_01.png';
import marqueeImg_02 from '@shared/assets/images/home-page/marquee/marquee_02.png';

export const generateMarqueeCards = (t: TFunction): MarqueeCard[] => [
	{
		title: t('up to 40'),
		description: t('reduce'),
	},
	{
		title: t('up to 80'),
		description: t('automate'),
		image: marqueeImg_01,
	},
	{
		title: t('5 years'),
		description: t('expertise'),
	},
	{
		title: '300+',
		description: t('satisfied'),
		image: marqueeImg_02,
	},
	{
		title: '500+',
		description: t('projects'),
	},
	{
		title: '50 000+',
		description: t('attracted'),
	},
	{
		title: '1 000 000+',
		description: t('processed'),
	},
];