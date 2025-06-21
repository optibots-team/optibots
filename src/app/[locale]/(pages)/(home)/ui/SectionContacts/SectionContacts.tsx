import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { ContactsContent } from './ContactsContent';
import { ContactsSocials } from './ContactsSocials';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionContacts.module.scss';

type SectionContactsProps = {
	className?: string;
};

const SectionContacts = ({ className }: SectionContactsProps) => (
	<section
		id={homeAnchors.CONTACTS}
		className={classNames(styles.contacts, {}, [className, 'section-padding', 'section-radius-top'])}
	>
		<Container display={'flex'} className={styles.contacts__container}>
			<ContactsContent />
			<ContactsSocials />
		</Container>
	</section>
);

export { SectionContacts };