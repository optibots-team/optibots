import type { TFunction } from '@shared/types/translations.types';
import type { AccordionItem } from '@features/Accordion';

export const generateAccordionItems = (t: TFunction): AccordionItem[] => [
	{
		id: 'implemented',
		title: t('implemented.title'),
		content: t.rich('implemented.content', { br: () => <br /> }),
		defaultOpen: true,
	},
	{
		id: 'additional',
		title: t('additional.title'),
		content: t.rich('additional.content', { br: () => <br /> }),
	},
	{
		id: 'manage',
		title: t('manage.title'),
		content: t.rich('manage.content', { br: () => <br /> }),
	},
	{
		id: 'necessity',
		title: t('necessity.title'),
		content: t.rich('necessity.content', { br: () => <br /> }),
	},
];