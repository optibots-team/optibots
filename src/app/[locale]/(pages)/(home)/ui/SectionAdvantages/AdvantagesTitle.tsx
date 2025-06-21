'use client';

import { classNames } from '@shared/lib/classNames';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { SectionTitle } from '@features/SectionTitle';
import styles from './SectionAdvantages.module.scss';
import AtomIcon from '@shared/assets/icons/atom_gradient.svg';

type AdvantagesTitleProps = {
	className?: string;
};

const AdvantagesTitle = ({ className }: AdvantagesTitleProps) => {
	const t = useTranslations('homePage.sectionAdvantages');

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<SectionTitle
				className={classNames(styles.advantages__title, {}, [className])}
				badge={{
					icon: <AtomIcon />,
					text: t('badge'),
				}}
				text={{
					title: t('sectionTitle').toUpperCase(),
					text: t('sectionDesc'),
					color: { text: 'dark-secondary' },
				}}
			/>
		</motion.div>
	);
};

export { AdvantagesTitle };