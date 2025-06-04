import { TextSize as TextSizePreset, TextElement } from '../model/types/text.types';

const DEFAULT_TITLE_SIZE = 'l';
const DEFAULT_TEXT_SIZE = 'm';

export type TextSize = TextSizePreset | { title?: TextSizePreset; text?: TextSizePreset };

export const getSizeClass = (element: TextElement, size?: TextSize): string => {
	if (!size) return element === 'title' ? DEFAULT_TITLE_SIZE : DEFAULT_TEXT_SIZE;

	if (typeof size === 'string') return size;

	return size[element] || (element === 'title' ? DEFAULT_TITLE_SIZE : DEFAULT_TEXT_SIZE);
};