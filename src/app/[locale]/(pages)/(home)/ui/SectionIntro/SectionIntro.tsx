import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Button, ButtonTheme } from '@shared/ui/Button';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {
	const tIntro = useTranslations('homePage.sectionIntro');
	const tButtons = useTranslations('buttons');

	return (
		<section className={classNames(styles.intro, {}, [className])}>
			<Container>
				<FlexV gap={'24'} className={styles.intro__inner}>
					<h1>{tIntro('title')}</h1>
					<p className={styles.desc}>{tIntro('desc')}</p>
					<FlexH gap={'14'}>
						<Button className={styles.intro__btn} fontFamily={'unbounded'} uppercase>
							{tButtons('order bot')}
						</Button>
						<Button className={styles.intro__btn} theme={ButtonTheme.OUTLINE}>
							{tButtons('learn more')}
						</Button>
					</FlexH>
				</FlexV>
			</Container>
		</section>
	);
};

export { SectionIntro };