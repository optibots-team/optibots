import type { TextElement, TextFontFamily } from '../model/types/text.types';

const DEFAULT_TITLE_FONT = 'unbounded';
const DEFAULT_TEXT_FONT = 'montserrat';

export const getFontFamilyClass = (element: TextElement, fontFamily?: TextFontFamily): string => {
	if (!fontFamily) return element === 'title' ? DEFAULT_TITLE_FONT : DEFAULT_TEXT_FONT;

	if (typeof fontFamily === 'string') return fontFamily;

	return fontFamily[element] || (element === 'title' ? DEFAULT_TITLE_FONT : DEFAULT_TEXT_FONT);
};