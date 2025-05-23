import type { ElementType } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Badge } from '@shared/ui/Badge';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import { TariffAdvantages } from '../TariffAdvantages/TariffAdvantages';
import type { ITariffCard } from '../../model/types/TariffCard.types';
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
					textColor={tariff === 'pro' ? TextColor.LIGHT : TextColor.DARK}
				/>
				<Text
					gap={'12'}
					title={title.toUpperCase()}
					titleTag={'h3'}
					text={description}
					size={{ title: TextSize.ML, text: TextSize.S }}
					color={{ title: TextColor.DARK, text: TextColor.DARK_SECONDARY }}
				/>
			</div>
			<div className={styles.card__row}>
				<Text
					className={'fw-500'}
					text={`$${price}`}
					size={TextSize.L}
					fontFamily={'unbounded'}
				/>
			</div>
			<div className={styles.card__row}>
				<TariffAdvantages advantages={advantages} />
			</div>
		</Component>
	);
};

export default TariffCard;