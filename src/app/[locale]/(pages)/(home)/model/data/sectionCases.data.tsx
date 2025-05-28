import type { TFunction } from '@shared/types/Translations.types';
import type { ICase } from '../types/SectionCases.types';
import FlowerIcon from '@shared/assets/icons/flower.svg';

export const generateCases = (t: TFunction): ICase[] => [
	{
		id: 'bloom',
		header: {
			time: '09:41',
			chanel: {
				title: t('bloom.title'),
				desc: t('bloom.desc'),
				icon: <FlowerIcon />,
				iconBg: 'green',
			},
		},
		messages: {
			userMessage: t('bloom.messages.user'),
			botMessage: t('bloom.messages.bot'),
			steps: t.raw('bloom.messages.steps')
		},
	},
	{
		id: 'wow',
		header: {
			time: '12:48',
			chanel: {
				title: t('wow.title'),
				desc: t('wow.desc'),
				icon: <FlowerIcon />,
				iconBg: 'blue',
			},
		},
		messages: {
			userMessage: t('wow.messages.user'),
			botMessage: t('wow.messages.bot'),
			steps: t.raw('wow.messages.steps')
		},
	},
	{
		id: 'school',
		header: {
			time: '15:03',
			chanel: {
				title: t('school.title'),
				desc: t('school.desc'),
				icon: <FlowerIcon />,
				iconBg: 'gray',
			},
		},
		messages: {
			userMessage: t('school.messages.user'),
			botMessage: t('school.messages.bot'),
			steps: t.raw('school.messages.steps')
		},
	},
];