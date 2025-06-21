import { useTranslations } from 'next-intl';
import { classNames, type Additional } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { CTA } from '@features/CTA';
import { Tariffs } from '@widgets/Tariffs';
import { TariffsTitle } from './TariffsTitle';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionTariffs.module.scss';

type SectionTariffsProps = {
	className?: string;
};

const SectionTariffs = ({ className }: SectionTariffsProps) => {
	const t = useTranslations('homePage.sectionTariffs');
	const additional: Additional = [
		className,
		'section-padding-top',
		'section-radius-top',
		'anchor-scroll-m',
	];

	return (
		<section
			id={homeAnchors.TARIFFS}
			className={classNames(styles.tariffs, {}, additional)}
		>
			<Container>
				<TariffsTitle />
				<Tariffs className={styles.tariffs__list} />
				<CTA
					className={styles.tariffs__cta}
					text={t('cta')}
					align={'center'}
				/>
			</Container>
		</section>
	);
};

export { SectionTariffs };