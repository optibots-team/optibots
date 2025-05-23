import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { CasesSlider } from '../CasesSlider/CasesSlider';
import { TextColor } from '@shared/ui/Text';
import styles from './SectionCases.module.scss';
import RaysIcon from '@shared/assets/icons/rays_gradient.svg';

type SectionCasesProps = {
	className?: string;
};

const SectionCases = ({ className }: SectionCasesProps) => {
	const t = useTranslations('homePage.sectionCases');

	return (
		<section className={classNames(styles.cases, {}, [className, 'section-padding-bottom', 'section-radius-bottom'])}>
			<Container display={'flex'} orientation={'vertical'} className={styles.cases__container}>
				<SectionTitle
					className={styles.cases__title}
					badge={{
						bordered: true,
						icon: <RaysIcon />,
						text: t('badge'),
					}}
					text={{
						title: t('sectionTitle'),
						text: t.rich('sectionDesc', { semiBold: (chunks) => <span className={'fw-600'}>{chunks}</span> }),
						color: { title: TextColor.WHITE, text: TextColor.LIGHT },
					}}
				/>
				<CasesSlider />
			</Container>
		</section>
	);
};

export { SectionCases };