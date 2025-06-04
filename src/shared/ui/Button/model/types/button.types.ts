import type { SizePreset } from '@shared/types/sizes.types';
import type { ColorTheme } from '@shared/types/themes.types';

export type ButtonTheme = ColorTheme | 'green-gradient' | 'outline' | 'clear';
export type ButtonSize = SizePreset | 'custom';