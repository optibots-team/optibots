import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { FlexV } from '@shared/ui/Stack';
import { Button } from '@shared/ui/Button';
import { SectionTitle } from '@features/SectionTitle';
import { Socials } from '@features/Socials';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionContacts.module.scss';
import FiguresIcon from '@shared/assets/icons/figures_gradient.svg';
import contactsImg from '@shared/assets/images/home-page/contacts/img_01.png';

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
			<Container display={'flex'} className={styles.contacts__container}>
				<FlexV gap={'24'} className={styles.contacts__content}>
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
					<Button fontFamily={'unbounded'} theme={'green-gradient'} className={'fw-500'}>
						{tButtons('order bot').toUpperCase()}
					</Button>
				</FlexV>
				<div className={styles.contacts__socials}>
					<Image
						className={styles.contacts__img}
						src={contactsImg}
						alt={'contacts background'}
						sizes={'100%'}
						fill
					/>
					<Socials />
				</div>
			</Container>
		</section>
	);
};

export { SectionContacts };