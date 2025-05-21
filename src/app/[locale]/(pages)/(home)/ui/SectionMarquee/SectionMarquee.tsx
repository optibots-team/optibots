import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Marquee } from '@widgets/Marquee';
import { marqueeCards } from '../../model/data/sectionMarquee.data';
import styles from './SectionMarquee.module.scss';

type SectionMarqueeProps = {
	className?: string;
};

const SectionMarquee = ({ className }: SectionMarqueeProps) => {
	const t = useTranslations('homePage.sectionMarquee');

	return (
		<div className={classNames(styles.marquee, {}, [className])}>
			<Marquee cards={marqueeCards} t={t} />
		</div>
	);
};

export { SectionMarquee };