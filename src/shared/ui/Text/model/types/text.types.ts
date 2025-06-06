import type { ColorTheme, ColorThemeBase } from '@shared/types/themes.types';
import type { SizePreset } from '@shared/types/sizes.types';
import type { Align } from '@shared/types/layout.types';
import type { FontFamily } from '@shared/types/fontFamily.types';

export type TextElement = 'title' | 'text';

export type TextColorTheme = ColorThemeBase | ColorTheme | 'dark-secondary' | 'green-gradient';

export type TextSize = SizePreset | 'xs' | 'ml' | 'sl' | 'xl' | 'xxl';

export type TextTitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type TextAlign = Align | { title?: Align; text?: Align };

export type TextFontFamily = FontFamily | { title?: FontFamily; text?: FontFamily };

export type TextColor = TextColorTheme | { title?: TextColorTheme; text?: TextColorTheme };

export type TextSizeResponsive =
	| TextSize
	| {
	title?: TextSize;
	text?: TextSize;
	mobile?: TextSize | { title?: TextSize; text?: TextSize };
	desktop?: TextSize | { title?: TextSize; text?: TextSize };
};