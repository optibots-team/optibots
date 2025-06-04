import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { Text } from '@shared/ui/Text';
import type { MarqueeCard } from '../../model/types/marquee.types';
import styles from './MarqueeCard.module.scss';

type MarqueeCardProps = {
	className?: string;
	card: MarqueeCard;
};

const MarqueeCard = (props: MarqueeCardProps) => {
	const { className, card: { title, description, image } } = props;

	return (
		<div className={classNames(styles.card, {}, [className])}>
			<Text
				className={styles.card__text}
				title={title}
				text={description?.toUpperCase()}
				size={{ title: 'l', text: 's' }}
				color={'white'}
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