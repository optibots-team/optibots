export const toVisibleLocale = (locale: string) => (locale === 'uk' ? 'ua' : locale);
export const toRouterLocale = (locale: string) => (locale === 'ua' ? 'uk' : locale);