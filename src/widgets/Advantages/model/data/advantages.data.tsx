import type { TFunction } from '@shared/types/translations.types';
import type { Advantage } from '@entities/Advantage';
import FullSupportIcon from '@shared/assets/icons/hands.svg';
import TurnkeyIcon from '@shared/assets/icons/key.svg';
import AnalyticsIcon from '@shared/assets/icons/graph.svg';
import AutomaticIcon from '@shared/assets/icons/barrel.svg';
import IntegrationIcon from '@shared/assets/icons/recs.svg';
import StructureIcon from '@shared/assets/icons/blocks.svg';
import fullSupportImage from '@shared/assets/images/home-page/advantages/advantage_01.png';
import integrationImage from '@shared/assets/images/home-page/advantages/advantage_02.png';

export const generateAdvantages = (t: TFunction): Advantage[] => [
	{
		id: 'support',
		title: t('support.title'),
		subtitle: t('support.subtitle'),
		icon: <FullSupportIcon />,
		image: fullSupportImage,
	},
	{
		id: 'turnkey',
		title: t('turnkey.title'),
		subtitle: t('turnkey.subtitle'),
		icon: <TurnkeyIcon />,
	},
	{
		id: 'analytics',
		title: t('analytics.title'),
		subtitle: t('analytics.subtitle'),
		icon: <AnalyticsIcon />,
		bg: 'light',
	},
	{
		id: 'automatic',
		title: t('automatic.title'),
		subtitle: t('automatic.subtitle'),
		icon: <AutomaticIcon />,
		bg: 'green',
	},
	{
		id: 'integration',
		title: t('integration.title'),
		subtitle: t('integration.subtitle'),
		icon: <IntegrationIcon />,
		bg: 'green',
		image: integrationImage,
	},
	{
		id: 'structure',
		title: t('structure.title'),
		subtitle: t('structure.subtitle'),
		icon: <StructureIcon />,
	},
];