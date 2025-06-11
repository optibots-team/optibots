import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { CTA } from '@features/CTA';
import { Tariffs } from '@widgets/Tariffs';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionTariffs.module.scss';
import PyramidIcon from '@shared/assets/icons/pyramid_gradient.svg';

type SectionTariffsProps = {
	className?: string;
};

const SectionTariffs = ({ className }: SectionTariffsProps) => {
	const t = useTranslations('homePage.sectionTariffs');

	return (
		<section
			id={homeAnchors.TARIFFS}
			className={classNames(styles.tariffs, {}, [className, 'section-padding', 'section-radius-top'])}
		>
			<Container>
				<SectionTitle
					className={styles.tariffs__title}
					badge={{
						bordered: true,
						background: 'transparent',
						icon: <PyramidIcon />,
						text: t('badge'),
					}}
					text={{
						title: t.rich('sectionTitle', { br: () => <br />}),
						color: 'white',
					}}
					align={'center'}
				/>
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