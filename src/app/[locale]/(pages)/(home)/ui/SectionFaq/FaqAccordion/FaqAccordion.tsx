import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Accordion } from '@widgets/Accordion';
import { generateAccordionItems } from '../../../model/data/sectionFaq.data';
import styles from './FaqAccordion.module.scss';

type FaqAccordionProps = {
	className?: string;
};

const FaqAccordion = ({ className }: FaqAccordionProps) => {
	const t = useTranslations('faq');
	const faqItems = useMemo(() => generateAccordionItems(t), [t]);

	return (
		<Accordion
			className={classNames(styles.accordion, {}, [className])}
			items={faqItems}
			counter
		/>
	);
};

export { FaqAccordion };