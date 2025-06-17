import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { Advantages } from '@widgets/Advantages';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionAdvantages.module.scss';
import AtomIcon from '@shared/assets/icons/atom_gradient.svg';

type SectionAdvantagesProps = {
	className?: string;
};

const SectionAdvantages = ({ className }: SectionAdvantagesProps) => {
	const t = useTranslations('homePage.sectionAdvantages');

	return (
		<section id={homeAnchors.ADVANTAGES} className={classNames('section-padding anchor-scroll-m', {}, [className])}>
			<Container display={'flex'} orientation={'vertical'} className={styles.advantages__container}>
				<SectionTitle
					className={styles.advantages__title}
					badge={{
						icon: <AtomIcon />,
						text: t('badge'),
					}}
					text={{
						title: t('sectionTitle').toUpperCase(),
						text: t('sectionDesc'),
						color: { text: 'dark-secondary' },
					}}
				/>
				<Advantages />
			</Container>
		</section>
	);
};

export { SectionAdvantages };