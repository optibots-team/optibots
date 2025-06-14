import { toVisibleLocale } from '../../lib/locales';
import { locales } from '@shared/const/locales';
import type { ListboxOption } from '@shared/ui/Listbox';

export const switcherOptions: ListboxOption[] = locales.map(locale => ({
	id: locale,
	value: toVisibleLocale(locale),
}));