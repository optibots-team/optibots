import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { CTA } from '@features/CTA';
import { Pains } from '@widgets/Pains';
import styles from './SectionPain.module.scss';
import HeartIcon from '@shared/assets/icons/heart_gradient.svg';

type SectionPainProps = {
	className?: string;
};

const SectionPain = ({ className }: SectionPainProps) => {
	const t = useTranslations('homePage.sectionPain');

	return (
		<section className={classNames(styles.pain, {}, [className, 'section-padding', 'section-radius'])}>
			<Container display={'flex'} orientation={'vertical'} className={styles.pain__container}>
				<SectionTitle
					className={styles.pain__title}
					badge={{
						bordered: true,
						icon: <HeartIcon />,
						text: t('badge'),
					}}
					text={{
						title: t('sectionTitle').toUpperCase(),
						color: 'white',
					}}
				/>
				<Pains />
				<CTA
					className={styles.pain__cta}
					text={t('cta')}
					align={'left'}
					textColor={'light'}
				/>
			</Container>
		</section>
	);
};

export { SectionPain };