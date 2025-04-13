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
				<div className={styles.intro__anim}>
					<iframe
						src={'https://my.spline.design/nexbotrobotcharacterconcept-2fgubm0MLigJaDyOIrxu1kg4/'}
						width={'100%'}
						height={'100%'}
						frameBorder={'0'}
						style={{ background: 'transparent' }}
						allowFullScreen
					/>
					<div className={styles.intro__plashka}>
						PLASHKA
					</div>
				</div>
			</Container>
		</section>
	);
};

export { SectionIntro };