import FastMarquee from 'react-fast-marquee';
import { MarqueeCard } from '../MarqueeCard/MarqueeCard';
import type { IMarqueeCard } from '../../model/types/Marquee.types';

type MarqueeProps = {
	className?: string;
	cards: IMarqueeCard[];
};

const Marquee = ({ className, cards }: MarqueeProps) => (
	<FastMarquee className={className} autoFill>
		{cards.map((card) => (
			<MarqueeCard key={card.title} card={card} />
		))}
	</FastMarquee>
);

export default Marquee;