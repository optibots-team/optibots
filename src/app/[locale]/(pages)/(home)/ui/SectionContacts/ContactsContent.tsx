'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { classNames } from '@shared/lib/classNames';
import { SectionTitle } from '@features/SectionTitle';
import { Button } from '@shared/ui/Button';
import { externalLinks } from '@shared/const/externalLinks';
import styles from './SectionContacts.module.scss';
import FiguresIcon from '@shared/assets/icons/figures_gradient.svg';

type ContactsContentProps = {
	className?: string;
};

const ContactsContent = ({ className }: ContactsContentProps) => {
	const tContacts = useTranslations('homePage.sectionContacts');
	const tButtons = useTranslations('buttons');

	return (
		<motion.div
			className={classNames(styles.contacts__content, {}, [className])}
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<SectionTitle
				className={styles.contacts__title}
				badge={{
					bordered: true,
					icon: <FiguresIcon />,
					text: tContacts('badge'),
				}}
				text={{
					title: tContacts('sectionTitle').toUpperCase(),
					text: tContacts('sectionDesc'),
					color: { title: 'white', text: 'light' },
				}}
			/>
			<Button
				as={'a'}
				href={externalLinks.optibotsTelegram}
				target={'_blank'}
				fontFamily={'unbounded'}
				theme={'green-gradient'}
				className={'fw-500'}
			>
				{tButtons('order bot').toUpperCase()}
			</Button>
		</motion.div>
	);
};

export { ContactsContent };