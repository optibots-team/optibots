import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { CTA } from '@features/CTA';
import { Pains } from '@widgets/Pains';
import { PainTitle } from './PainTitle';
import styles from './SectionPain.module.scss';

type SectionPainProps = {
	className?: string;
};

const SectionPain = ({ className }: SectionPainProps) => {
	const t = useTranslations('homePage.sectionPain');

	return (
		<section className={classNames(styles.pain, {}, [className, 'section-padding', 'section-radius'])}>
			<Container display={'flex'} orientation={'vertical'} className={styles.pain__container}>
				<PainTitle />
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