import type { SizeToken } from '@shared/types/sizes.types';

export type IconSize = Exclude<SizeToken, '0'> | 'fill';
