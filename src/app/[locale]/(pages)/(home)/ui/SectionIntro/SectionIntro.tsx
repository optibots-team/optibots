import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Text, TextColor } from '@shared/ui/Text';
import { Icon, IconSize } from '@shared/ui/Icon';
import { Button, ButtonTheme } from '@shared/ui/Button';
import styles from './SectionIntro.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-right.svg';

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
					<h1 className={styles.intro__h1}>
						{tIntro.rich('title', {
							colored: (chunks) => <span className={styles.colored}>{chunks}</span>,
							right: (chunks) => <span className={styles.right}>{chunks}</span>,
							br: () => <br />,
						})}
					</h1>
					<Text text={tIntro('desc')} fontFamily={'montserrat'} color={TextColor.DARK_SECONDARY} />
					<FlexH gap={'14'} align={'stretch'}>
						<Button className={styles.intro__btn} fontFamily={'unbounded'} uppercase>
							{tButtons('order bot')}
						</Button>
						<Button className={styles.intro__btn} theme={ButtonTheme.OUTLINE}>
							{tButtons('learn more')}
							<Icon icon={<ArrowIcon />} size={IconSize.SIZE_24} />
						</Button>
					</FlexH>
				</FlexV>
			</Container>
		</section>
	);
};

export { SectionIntro };