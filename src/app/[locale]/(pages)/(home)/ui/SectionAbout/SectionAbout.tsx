import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import styles from './SectionAbout.module.scss';
import AtomIcon from '@shared/assets/icons/atom_gradient.svg';
import AboutImg from '@shared/assets/images/home-page/about/img_01.png';

type SectionAboutProps = {
	className?: string;
};

const SectionAbout = ({ className }: SectionAboutProps) => {
	const t = useTranslations('homePage.sectionAbout');

	return (
		<section className={classNames(styles.about, {}, [className, 'section-radius-bottom'])}>
			<Container display={'grid'} className={styles.about__container}>
				<SectionTitle
					badge={{
						bordered: true,
						icon: <AtomIcon />,
						text: t('badge'),
					}}
					text={{
						title: t.rich('sectionTitle', { br: () => <br /> }),
						text: t('sectionDesc'),
						color: 'white',
					}}
				/>
				<Image
					className={styles.about__img}
					src={AboutImg}
					alt={'about img'}
				/>
			</Container>
		</section>
	);
};

export { SectionAbout };