import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import type { IMarqueeCard } from '../../model/types/Marquee.types';
import styles from './MarqueeCard.module.scss';

type MarqueeCardProps = {
	className?: string;
	card: IMarqueeCard;
};

const MarqueeCard = (props: MarqueeCardProps) => {
	const { className, card: { title, description, image } } = props;

	return (
		<div className={classNames(styles.card, {}, [className])}>
			<Text
				className={styles.card__text}
				title={title}
				text={description?.toUpperCase()}
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