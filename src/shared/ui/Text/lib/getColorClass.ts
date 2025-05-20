import { TextColor, TextElement } from '../model/types/Text.types';

const DEFAULT_TITLE_COLOR = TextColor.PRIMARY;
const DEFAULT_TEXT_COLOR = TextColor.SECONDARY;

export type TextColorProps = TextColor | { title?: TextColor; text?: TextColor };

export const getColorClass = (element: TextElement, color?: TextColorProps): string => {
	if (!color) return element === 'title' ? DEFAULT_TITLE_COLOR : DEFAULT_TEXT_COLOR;

	if (typeof color === 'string') return color;

	return color[element] || (element === 'title' ? DEFAULT_TITLE_COLOR : DEFAULT_TEXT_COLOR);
};