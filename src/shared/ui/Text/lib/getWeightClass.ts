import type { TextElement, TextWeight } from '../model/types/text.types';

const DEFAULT_TITLE_WEIGHT = '700';
const DEFAULT_TEXT_WEIGHT = '400';

export const getWeightClass = (element: TextElement, weight?: TextWeight): string => {
	if (!weight) return element === 'title' ? DEFAULT_TITLE_WEIGHT : DEFAULT_TEXT_WEIGHT;

	if (typeof weight === 'string') return weight;

	return weight[element] || (element === 'title' ? DEFAULT_TITLE_WEIGHT : DEFAULT_TEXT_WEIGHT);
};