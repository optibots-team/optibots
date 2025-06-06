import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Flex, FlexV } from '@shared/ui/Stack';
import { Text } from '@shared/ui/Text';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';
import styles from './SectionIntro.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-right.svg';
import RobotImage from '@shared/assets/images/home-page/intro/img_01.png';

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
					<Text text={tIntro('desc')} fontFamily={'montserrat'} color={'dark-secondary'} />
					<Image
						className={styles.intro__img}
						src={RobotImage}
						alt={'robot'}
						priority
					/>
					<Flex gap={'14'} align={'stretch'} className={styles.intro__buttons}>
						<Button className={styles.intro__btn} fontFamily={'unbounded'} uppercase>
							{tButtons('order bot')}
						</Button>
						<Button className={styles.intro__btn} theme={'outline'}>
							{tButtons('learn more')}
							<Icon icon={<ArrowIcon />} size={'24'} />
						</Button>
					</Flex>
				</FlexV>
			</Container>
		</section>
	);
};

export { SectionIntro };