'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { classNames } from '@shared/lib/classNames';
import { SectionTitle } from '@features/SectionTitle';
import styles from './SectionTariffs.module.scss';
import PyramidIcon from '@shared/assets/icons/pyramid_gradient.svg';

type TariffsTitleProps = {
	className?: string;
};

const TariffsTitle = ({ className }: TariffsTitleProps) => {
	const t = useTranslations('homePage.sectionTariffs');

	return (
		<motion.div
			className={classNames(styles.tariffs__title, {}, [className])}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<SectionTitle
				badge={{
					bordered: true,
					background: 'transparent',
					icon: <PyramidIcon />,
					text: t('badge'),
				}}
				text={{
					title: t.rich('sectionTitle', { br: () => <br />}),
					color: 'white',
				}}
				align={'center'}
			/>
		</motion.div>
	);
};

export { TariffsTitle };