import type { SizePreset } from '@shared/types/sizes.types';
import { ColorTheme, ColorThemeBase } from '@shared/types/themes.types';

export type ButtonTheme = ColorThemeBase | ColorTheme | 'green-gradient' | 'outline' | 'clear';
export type ButtonSize = SizePreset | 'custom';