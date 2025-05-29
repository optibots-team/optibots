import type { TFunction } from '@shared/types/Translations.types';
import type { ICase } from '../types/TelegramSlider.types';
import FlowerIcon from '@shared/assets/icons/flower.svg';
import BalloonIcon from '@shared/assets/icons/balloon.svg';
import SchoolIcon from '@shared/assets/icons/it-school.svg';

export const generateCases = (t: TFunction): ICase[] => [
	{
		id: 'bloom',
		externalSlider: {
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
		internalSlider: {
			progress: [
				{
					title: t('bloom.progress.first'),
					progress: 52,
				},
				{
					title: t('bloom.progress.second'),
					progress: 43,
				},
			],
			result: t.raw('bloom.result'),
		},
	},
	{
		id: 'wow',
		externalSlider: {
			header: {
				time: '12:48',
				chanel: {
					title: t('wow.title'),
					desc: t('wow.desc'),
					icon: <BalloonIcon />,
					iconBg: 'blue',
				},
			},
			messages: {
				userMessage: t('wow.messages.user'),
				botMessage: t('wow.messages.bot'),
				steps: t.raw('wow.messages.steps')
			},
		},
		internalSlider: {
			progress: [
				{
					title: t('wow.progress.first'),
					progress: 51,
				},
				{
					title: t('wow.progress.second'),
					progress: 37,
				},
			],
			result: t.raw('wow.result'),
		},
	},
	{
		id: 'school',
		externalSlider: {
			header: {
				time: '15:03',
				chanel: {
					title: t('school.title'),
					desc: t('school.desc'),
					icon: <SchoolIcon />,
					iconBg: 'gray',
				},
			},
			messages: {
				userMessage: t('school.messages.user'),
				botMessage: t('school.messages.bot'),
				steps: t.raw('school.messages.steps')
			},
		},
		internalSlider: {
			progress: [
				{
					title: t('school.progress.first'),
					progress: 62,
				},
				{
					title: t('school.progress.second'),
					progress: 46,
				},
			],
			result: t.raw('school.result'),
		},
	},
];