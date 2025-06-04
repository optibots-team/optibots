import type { TextColorTheme, TextElement } from '../model/types/text.types';

const DEFAULT_TITLE_COLOR = 'dark';
const DEFAULT_TEXT_COLOR = 'dark';

export type TextColor = TextColorTheme | { title?: TextColorTheme; text?: TextColorTheme };

export const getColorClass = (element: TextElement, color?: TextColor): string => {
	if (!color) return element === 'title' ? DEFAULT_TITLE_COLOR : DEFAULT_TEXT_COLOR;

	if (typeof color === 'string') return color;

	return color[element] || (element === 'title' ? DEFAULT_TITLE_COLOR : DEFAULT_TEXT_COLOR);
};