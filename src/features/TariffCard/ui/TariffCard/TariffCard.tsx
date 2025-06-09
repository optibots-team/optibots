import type { ElementType } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Badge } from '@shared/ui/Badge';
import { Text } from '@shared/ui/Text';
import { TariffAdvantages } from '../TariffAdvantages/TariffAdvantages';
import type { ITariffCard } from '../../model/types/tariffCard.types';
import styles from './TariffCard.module.scss';

type TariffCardProps<T extends ElementType = 'div'> = {
	as?: T;
	className?: string;
	card: ITariffCard;
};

const TariffCard = <T extends ElementType = 'div'>(props: TariffCardProps<T>) => {
	const { as, className, card: { tariff, title, description, price, advantages } } = props;
	const Component = as || 'div';

	return (
		<Component className={classNames(styles.card, {}, [className, styles[tariff]])}>
			<div className={styles.card__row}>
				<Badge
					size={'s'}
					text={tariff.toUpperCase()}
					background={tariff === 'pro' ? 'dark' : 'green-gradient'}
					textColor={tariff === 'pro' ? 'light' : 'dark'}
				/>
				<Text
					gap={'12'}
					title={title.toUpperCase()}
					titleTag={'h3'}
					text={description}
					size={{ title: 'ml', text: 's' }}
					color={{ title: 'dark', text: 'dark-secondary' }}
					weight={'500'}
				/>
			</div>
			<div className={styles.card__row}>
				<Text
					text={`$${price}`}
					size={'l'}
					fontFamily={'unbounded'}
					weight={'500'}
				/>
			</div>
			<div className={styles.card__row}>
				<TariffAdvantages advantages={advantages} />
			</div>
		</Component>
	);
};

export default TariffCard;