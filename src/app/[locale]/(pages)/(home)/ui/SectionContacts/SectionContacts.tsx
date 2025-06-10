import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Flex } from '@shared/ui/Stack';
import { Button } from '@shared/ui/Button';
import { SectionTitle } from '@features/SectionTitle';
import { Socials } from '@features/Socials';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionContacts.module.scss';
import FiguresIcon from '@shared/assets/icons/figures_gradient.svg';

type SectionContactsProps = {
	className?: string;
};

const SectionContacts = ({ className }: SectionContactsProps) => {
	const tContacts = useTranslations('homePage.sectionContacts');
	const tButtons = useTranslations('buttons');

	return (
		<section
			id={homeAnchors.CONTACTS}
			className={classNames(styles.contacts, {}, [className, 'section-padding', 'section-radius-top'])}
		>
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
				<Flex justify={'between'} className={styles.contacts__row}>
					<Button fontFamily={'unbounded'} theme={'light'} className={'fw-500'}>
						{tButtons('order bot').toUpperCase()}
					</Button>
					<Socials className={styles.contacts__socials} />
				</Flex>
			</Container>
		</section>
	);
};

export { SectionContacts };