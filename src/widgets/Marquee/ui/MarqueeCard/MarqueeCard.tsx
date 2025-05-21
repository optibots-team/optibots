import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import type { TFunction } from '@shared/types/Translations.types';
import type { IMarqueeCard } from '../../model/types/Marquee.types';
import styles from './MarqueeCard.module.scss';

type MarqueeCardProps = {
	className?: string;
	card: IMarqueeCard;
	t?: TFunction;
};

const MarqueeCard = (props: MarqueeCardProps) => {
	const { className, t, card: { title, description, image } } = props;

	return (
		<div className={classNames(styles.card, {}, [className])}>
			<Text
				className={styles.card__text}
				title={t ? t(title) : title}
				text={description && (t ? t(description).toUpperCase() : description.toUpperCase())}
				size={{ title: TextSize.L, text: TextSize.S }}
				color={TextColor.WHITE}
				gap={'8'}
			/>
			{image && (
				<Image
					className={styles.card__img}
					src={image}
					alt={title}
				/>
			)}
		</div>
	);
};

export { MarqueeCard };