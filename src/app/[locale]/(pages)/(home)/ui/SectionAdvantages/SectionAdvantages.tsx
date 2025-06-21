import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Advantages } from '@widgets/Advantages';
import { AdvantagesTitle } from './AdvantagesTitle';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionAdvantages.module.scss';

type SectionAdvantagesProps = {
	className?: string;
};

const SectionAdvantages = ({ className }: SectionAdvantagesProps) => (
	<section id={homeAnchors.ADVANTAGES} className={classNames('section-padding anchor-scroll-m', {}, [className])}>
		<Container display={'flex'} orientation={'vertical'} className={styles.advantages__container}>
			<AdvantagesTitle />
			<Advantages />
		</Container>
	</section>
);

export { SectionAdvantages };