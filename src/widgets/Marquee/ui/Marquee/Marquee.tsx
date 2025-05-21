import FastMarquee from 'react-fast-marquee';
import { MarqueeCard } from '../MarqueeCard/MarqueeCard';
import type { TFunction } from '@shared/types/Translations.types';
import type { IMarqueeCard } from '../../model/types/Marquee.types';

type MarqueeProps = {
	className?: string;
	cards: IMarqueeCard[];
	t?: TFunction;
};

const Marquee = ({ className, cards, t }: MarqueeProps) => (
	<FastMarquee className={className} autoFill>
		{cards.map((card) => (
			<MarqueeCard key={card.title} t={t} card={card} />
		))}
	</FastMarquee>
);

export default Marquee;