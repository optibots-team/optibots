import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Marquee } from '@features/Marquee';
import { generateMarqueeCards } from '../model/data/homeMarquee.data';
import styles from './HomeMarquee.module.scss';

type HomeMarqueeProps = {
	className?: string;
};

const HomeMarquee = ({ className }: HomeMarqueeProps) => {
	const t = useTranslations('homePage.sectionMarquee');
	const marqueeCards = useMemo(() => generateMarqueeCards(t), [t]);

	return (
		<div className={classNames(styles.marquee, {}, [className])}>
			<Marquee cards={marqueeCards} />
		</div>
	);
};

export default HomeMarquee;