import { classNames } from '@shared/lib/classNames';
import { TariffCard } from '@features/TariffCard';
import type { ITariffCard } from '@features/TariffCard';
import styles from './TariffsList.module.scss';

type TariffsListProps = {
	className?: string;
	tariffs: ITariffCard[];
};

const TariffsList = ({ className, tariffs }: TariffsListProps) => (
	<ul className={classNames(styles.list, {}, [className])}>
		{tariffs.map((tariff) => (
			<TariffCard key={tariff.tariff} as={'li'} card={tariff} />
		))}
	</ul>
);

export { TariffsList };