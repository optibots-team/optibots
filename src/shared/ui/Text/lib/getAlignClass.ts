import type { TextElement, TextAlign } from '../model/types/text.types';

const DEFAULT_TITLE_ALIGN = 'left';
const DEFAULT_TEXT_ALIGN = 'left';

export const getAlignClass = (element: TextElement, align?: TextAlign): string => {
	if (!align) return element === 'title' ? DEFAULT_TITLE_ALIGN : DEFAULT_TEXT_ALIGN;

	if (typeof align === 'string') return align;

	return align[element] || (element === 'title' ? DEFAULT_TITLE_ALIGN : DEFAULT_TEXT_ALIGN);
};