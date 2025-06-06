import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { Advantages } from '@widgets/Advantages';
import styles from './SectionAdvantages.module.scss';
import AtomIcon from '@shared/assets/icons/atom_gradient.svg';

type SectionAdvantagesProps = {
	className?: string;
};

const SectionAdvantages = ({ className }: SectionAdvantagesProps) => {
	const t = useTranslations('homePage.sectionAdvantages');

	return (
		<section className={classNames(styles.advantages, {}, [className, 'section-padding'])}>
			<Container display={'flex'} orientation={'vertical'} className={styles.advantages__container}>
				<SectionTitle
					className={styles.advantages__title}
					badge={{
						bordered: true,
						icon: <AtomIcon />,
						text: t('badge'),
					}}
					text={{
						title: t('sectionTitle').toUpperCase(),
						text: t.rich('sectionDesc', { semiBold: (chunks) => <span className={'fw-600'}>{chunks}</span> }),
						color: 'dark',
					}}
				/>
				<Advantages />
			</Container>
		</section>
	);
};

export { SectionAdvantages };