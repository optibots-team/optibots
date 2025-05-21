import type { TextElement } from '../model/types/Text.types';
import type { FontFamily } from '@shared/types/FontFamily.types';

const DEFAULT_TITLE_FONT = 'unbounded';
const DEFAULT_TEXT_FONT = 'montserrat';

export type TextFontFamilyProps = FontFamily | { title?: FontFamily; text?: FontFamily };

export const getFontFamilyClass = (element: TextElement, fontFamily?: TextFontFamilyProps): string => {
	if (!fontFamily) return element === 'title' ? DEFAULT_TITLE_FONT : DEFAULT_TEXT_FONT;

	if (typeof fontFamily === 'string') return fontFamily;

	return fontFamily[element] || (element === 'title' ? DEFAULT_TITLE_FONT : DEFAULT_TEXT_FONT);
};