import { locales } from '@shared/const/locales';
import type { ISelectOptions } from '@shared/ui/Select';

export const switcherOptions: ISelectOptions[] = locales.map(locale => ({
	label: locale,
	value: locale,
}));