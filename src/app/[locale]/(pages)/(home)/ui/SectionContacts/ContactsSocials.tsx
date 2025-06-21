'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { classNames } from '@shared/lib/classNames';
import { Socials } from '@features/Socials';
import styles from './SectionContacts.module.scss';
import contactsImg from '@shared/assets/images/home-page/contacts/img_01.png';

type ContactsSocialsProps = {
	className?: string;
};

const ContactsSocials = ({ className }: ContactsSocialsProps) => (
	<motion.div
		className={classNames(styles.contacts__socials, {}, [className])}
		initial={{ opacity: 0, x: 50 }}
		whileInView={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.8, ease: 'easeOut' }}
		viewport={{ once: true, amount: 0.3 }}
	>
		<Image
			className={styles.contacts__img}
			src={contactsImg}
			alt={'contacts background'}
			sizes={'100%'}
			fill
		/>
		<Socials />
	</motion.div>
);

export { ContactsSocials };