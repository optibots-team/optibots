import { useTranslations } from 'next-intl';
import { classNames, type Additional } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { CasesSlider } from '@widgets/CasesSlider';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionCases.module.scss';
import RaysIcon from '@shared/assets/icons/rays_gradient.svg';

type SectionCasesProps = {
	className?: string;
};

const SectionCases = ({ className }: SectionCasesProps) => {
	const t = useTranslations('homePage.sectionCases');
	const additional: Additional = [
		className,
		'section-padding',
		'section-radius-bottom',
		'anchor-scroll-m',
	];

	return (
		<section
			id={homeAnchors.CASES}
			className={classNames(styles.cases, {}, additional)}
		>
			<Container>
				<SectionTitle
					className={styles.cases__title}
					badge={{
						bordered: true,
						icon: <RaysIcon />,
						text: t('badge'),
					}}
					text={{
						title: t('sectionTitle').toUpperCase(),
						text: t.rich('sectionDesc', { semiBold: (chunks) => <span className={'fw-600'}>{chunks}</span> }),
						color: { title: 'white', text: 'light' },
					}}
				/>
			</Container>
			<CasesSlider />
		</section>
	);
};

export { SectionCases };