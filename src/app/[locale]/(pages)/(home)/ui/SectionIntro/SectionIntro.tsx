import {useTranslations} from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {
	const t = useTranslations('homePage');

	return (
		<section className={classNames(styles.intro, {}, [className])}>
			<Container>
				<h1>{t('title')}</h1>
				<p>{t('desc')}</p>
			</Container>
		</section>
	);
};

export { SectionIntro };