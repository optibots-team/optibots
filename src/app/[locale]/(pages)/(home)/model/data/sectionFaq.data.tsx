import type { TFunction } from '@shared/types/Translations.types';
import type { IAccordionItem } from '@widgets/Accordion';

export const generateAccordionItems = (t: TFunction): IAccordionItem[] => [
	{
		title: t('implemented.title'),
		content: t.rich('implemented.content', { br: () => <br /> }),
		defaultOpen: true,
	},
	{
		title: t('additional.title'),
		content: t.rich('additional.content', { br: () => <br /> }),
	},
	{
		title: t('manage.title'),
		content: t.rich('manage.content', { br: () => <br /> }),
	},
	{
		title: t('necessity.title'),
		content: t.rich('necessity.content', { br: () => <br /> }),
	},
];