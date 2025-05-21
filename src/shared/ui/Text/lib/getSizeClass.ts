import { TextSize, TextElement } from '../model/types/Text.types';

const DEFAULT_TITLE_SIZE = TextSize.L;
const DEFAULT_TEXT_SIZE = TextSize.M;

export type TextSizeProps = TextSize | { title?: TextSize; text?: TextSize };

export const getSizeClass = (element: TextElement, size?: TextSizeProps): string => {
	if (!size) return element === 'title' ? DEFAULT_TITLE_SIZE : DEFAULT_TEXT_SIZE;

	if (typeof size === 'string') return size;

	return size[element] || (element === 'title' ? DEFAULT_TITLE_SIZE : DEFAULT_TEXT_SIZE);
};