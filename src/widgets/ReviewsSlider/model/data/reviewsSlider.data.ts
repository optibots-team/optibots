import type { TFunction } from '@shared/types/translations.types';
import type { IReview } from '../types/ReviewsSlider.types';

export const generateReviews = (t: TFunction): IReview[] => [
	{
		id: 'bloom',
		author: t('bloom.author'),
		job: t('bloom.job'),
		company: t('bloom.company'),
		comment: t('bloom.comment'),
	},
	{
		id: 'wow',
		author: t('wow.author'),
		job: t('wow.job'),
		company: t('wow.company'),
		comment: t('wow.comment'),
	},
	{
		id: 'sweet',
		author: t('sweet.author'),
		job: t('sweet.job'),
		company: t('sweet.company'),
		comment: t('sweet.comment'),
	},
	{
		id: 'english',
		author: t('english.author'),
		job: t('english.job'),
		company: t('english.company'),
		comment: t('english.comment'),
	},
	{
		id: 'relaxTour',
		author: t('relaxTour.author'),
		job: t('relaxTour.job'),
		company: t('relaxTour.company'),
		comment: t('relaxTour.comment'),
	},
	{
		id: 'manicure',
		author: t('manicure.author'),
		job: t('manicure.job'),
		company: t('manicure.company'),
		comment: t('manicure.comment'),
	},
	{
		id: 'adSpark',
		author: t('adSpark.author'),
		job: t('adSpark.job'),
		company: t('adSpark.company'),
		comment: t('adSpark.comment'),
	},
	{
		id: 'streetBox',
		author: t('streetBox.author'),
		job: t('streetBox.job'),
		company: t('streetBox.company'),
		comment: t('streetBox.comment'),
	},
];