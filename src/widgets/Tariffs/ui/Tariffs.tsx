'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { TariffCard } from '@features/TariffCard';
import { generateTariffs } from '../model/data/tariffs.data';
import styles from './Tariffs.module.scss';

type TariffsProps = {
	className?: string;
};

const Tariffs = ({ className }: TariffsProps) => {
	const t = useTranslations('tariffs');

	const tariffs = useMemo(() => generateTariffs(t), [t]);

	return (
		<ul className={classNames(styles.tariffs, {}, [className])}>
			{tariffs.map((tariff) => (
				<motion.li
					key={tariff.tariff}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<TariffCard card={tariff} />
				</motion.li>
			))}
		</ul>
	);
};

export default Tariffs;