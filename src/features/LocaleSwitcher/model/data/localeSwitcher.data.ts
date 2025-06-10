import { locales } from '@shared/const/locales';
import type { SelectOptions } from '@shared/ui/Select';

export const switcherOptions: SelectOptions[] = locales.map(locale => ({
	label: locale === 'uk' ? 'ua' : locale,
	value: locale,
}));