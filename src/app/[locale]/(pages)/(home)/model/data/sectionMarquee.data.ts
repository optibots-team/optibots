import type { IMarqueeCard } from '@widgets/Marquee';
import type { TFunction } from '@shared/types/Translations.types';
import marqueeImg_01 from '@shared/assets/images/home-page/marquee/marquee_01.png';
import marqueeImg_02 from '@shared/assets/images/home-page/marquee/marquee_02.png';

export const generateMarqueeCards = (t: TFunction): IMarqueeCard[] => [
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
];