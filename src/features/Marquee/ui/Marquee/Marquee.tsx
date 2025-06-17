import FastMarquee from 'react-fast-marquee';
import { MarqueeCard } from '../MarqueeCard/MarqueeCard';
import type { MarqueeCard as IMarqueeCard } from '../../model/types/marquee.types';

type MarqueeProps = {
	className?: string;
	cards: IMarqueeCard[];
};

const Marquee = ({ className, cards }: MarqueeProps) => (
	<FastMarquee className={className} autoFill>
		{cards.map((card) => (
			<MarqueeCard key={card.id} card={card} />
		))}
	</FastMarquee>
);

export default Marquee;