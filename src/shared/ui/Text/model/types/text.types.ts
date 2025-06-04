import type { ColorTheme, ColorThemeBase } from '@shared/types/themes.types';
import type { SizePreset } from '@shared/types/sizes.types';

export type TextElement = 'title' | 'text';

export type TextColorTheme = ColorThemeBase | ColorTheme | 'dark-secondary' | 'green-gradient';

export type TextSize = SizePreset | 'xs' | 'ml' | 'xl' | 'xxl';

export type TextTitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';