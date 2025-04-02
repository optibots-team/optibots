import { defineRouting } from 'next-intl/routing';
import { locales } from '@shared/const/locales';

export const routing = defineRouting({
	locales,
	defaultLocale: locales[0],
});