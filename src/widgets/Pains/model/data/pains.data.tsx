import type { TFunction } from '@shared/types/translations.types';
import type { Pain } from '@entities/Pain';
import IconClock from '@shared/assets/icons/clock.svg';
import IconBox from '@shared/assets/icons/box.svg';
import IconConversion from '@shared/assets/icons/conversion.svg';
import IconWarning from '@shared/assets/icons/warning.svg';
import IconRun from '@shared/assets/icons/run.svg';

export const generatePainList = (t: TFunction): Pain[] => [
	{
		id: 'routine',
		icon: <IconClock />,
		title: t('routine.title'),
		desc: t('routine.desc'),
	},
	{
		id: 'loss',
		icon: <IconBox />,
		title: t('loss.title'),
		desc: t('loss.desc'),
	},
	{
		id: 'conversion',
		icon: <IconConversion />,
		title: t('conversion.title'),
		desc: t('conversion.desc'),
	},
	{
		id: 'errors',
		icon: <IconWarning />,
		title: t('errors.title'),
		desc: t('errors.desc'),
	},
	{
		id: 'competitors',
		icon: <IconRun />,
		title: t('competitors.title'),
		desc: t('competitors.desc'),
	},
];