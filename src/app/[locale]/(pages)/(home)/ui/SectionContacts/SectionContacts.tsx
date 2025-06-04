import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { FlexH } from '@shared/ui/Stack';
import { Button } from '@shared/ui/Button';
import { SectionTitle } from '@features/SectionTitle';
import { Socials } from '@features/Socials';
import styles from './SectionContacts.module.scss';
import FiguresIcon from '@shared/assets/icons/figures_gradient.svg';

type SectionContactsProps = {
	className?: string;
};

const SectionContacts = ({ className }: SectionContactsProps) => {
	const tContacts = useTranslations('homePage.sectionContacts');
	const tButtons = useTranslations('buttons');

	return (
		<section className={classNames(styles.contacts, {}, [className, 'section-padding', 'section-radius-top'])}>
			<Container display={'flex'} orientation={'vertical'} className={styles.contacts__container}>
				<SectionTitle
					className={styles.contacts__title}
					badge={{
						bordered: true,
						icon: <FiguresIcon />,
						text: tContacts('badge'),
					}}
					text={{
						title: tContacts('sectionTitle').toUpperCase(),
						text: tContacts('sectionDesc'),
						color: { title: 'white', text: 'light' },
					}}
				/>
				<FlexH justify={'between'} align={'end'} gap={'12'}>
					<Button fontFamily={'unbounded'} theme={'light'} className={'fw-500'}>
						{tButtons('order bot').toUpperCase()}
					</Button>
					<Socials />
				</FlexH>
			</Container>
		</section>
	);
};

export { SectionContacts };