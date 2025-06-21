'use client';

import { classNames } from '@shared/lib/classNames';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { SectionTitle } from '@features/SectionTitle';
import styles from './SectionPain.module.scss';
import HeartIcon from '@shared/assets/icons/heart_gradient.svg';

type PainTitleProps = {
	className?: string;
};

const PainTitle = ({ className }: PainTitleProps) => {
	const t = useTranslations('homePage.sectionPain');

	return (
		<motion.div
			className={classNames(styles.pain__title, {}, [className])}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<SectionTitle
				badge={{
					bordered: true,
					icon: <HeartIcon />,
					text: t('badge'),
				}}
				text={{
					title: t('sectionTitle').toUpperCase(),
					color: 'white',
				}}
			/>
		</motion.div>
	);
};

export { PainTitle };