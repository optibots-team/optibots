import { useMemo } from 'react';
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
				<TariffCard key={tariff.tariff} as={'li'} card={tariff} />
			))}
		</ul>
	);
};

export default Tariffs;