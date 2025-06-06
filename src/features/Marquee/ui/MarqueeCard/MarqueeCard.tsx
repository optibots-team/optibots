import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { Text } from '@shared/ui/Text';
import { Card } from '@shared/ui/Card';
import type { MarqueeCard } from '../../model/types/marquee.types';
import styles from './MarqueeCard.module.scss';

type MarqueeCardProps = {
	className?: string;
	card: MarqueeCard;
};

const MarqueeCard = (props: MarqueeCardProps) => {
	const { className, card: { title, description, image } } = props;

	return (
		<Card
			className={classNames(styles.card, {}, [className])}
			padding={'m'}
			radius={'m'}
		>
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
		</Card>
	);
};

export { MarqueeCard };