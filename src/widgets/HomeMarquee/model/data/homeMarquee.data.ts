import type { MarqueeCard } from '@features/Marquee';
import type { TFunction } from '@shared/types/translations.types';
import marqueeImg_01 from '@shared/assets/images/home-page/marquee/marquee_01.png';
import marqueeImg_02 from '@shared/assets/images/home-page/marquee/marquee_02.png';
import marqueeImg_03 from '@shared/assets/images/home-page/marquee/marquee_03.svg?url';

export const generateMarqueeCards = (t: TFunction): MarqueeCard[] => [
	{
		id: 'reduce',
		title: t('up to 40'),
		description: t('reduce'),
	},
	{
		id: 'automate',
		title: t('up to 80'),
		description: t('automate'),
		image: marqueeImg_01,
	},
	{
		id: 'expertise',
		title: t('5 years'),
		description: t('expertise'),
	},
	{
		id: 'satisfied',
		title: '300+',
		description: t('satisfied'),
		image: marqueeImg_02,
	},
	{
		id: 'projects',
		title: '500+',
		description: t('projects'),
	},
	{
		id: 'attracted',
		title: '50 000+',
		description: t('attracted'),
		image: marqueeImg_03,
	},
	{
		id: 'processed',
		title: '1 000 000+',
		description: t('processed'),
	},
];