import { TextAlign, TextElement } from '../model/types/Text.types';

const DEFAULT_TITLE_ALIGN = TextAlign.LEFT;
const DEFAULT_TEXT_ALIGN = TextAlign.LEFT;

export type TextAlignProps = TextAlign | { title?: TextAlign; text?: TextAlign };

export const getAlignClass = (element: TextElement, align?: TextAlignProps): string => {
	if (!align) return element === 'title' ? DEFAULT_TITLE_ALIGN : DEFAULT_TEXT_ALIGN;

	if (typeof align === 'string') return align;

	return align[element] || (element === 'title' ? DEFAULT_TITLE_ALIGN : DEFAULT_TEXT_ALIGN);
};