'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { motion } from 'motion/react';
import { classNames, type Additional } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { AboutTitle } from './AboutTitle';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionAbout.module.scss';
import AboutImg_ru from '@shared/assets/images/home-page/about/img_01_ru.svg?url';
import AboutImg_uk from '@shared/assets/images/home-page/about/img_01_uk.svg?url';
import AboutImg_en from '@shared/assets/images/home-page/about/img_01_en.svg?url';

type SectionAboutProps = {
	className?: string;
};

const SectionAbout = ({ className }: SectionAboutProps) => {
	const locale = useLocale();

	const additional: Additional = [
		className,
		'section-radius-bottom',
		'anchor-scroll-m',
	];

	const imageMap: Record<string, string> = {
		en: AboutImg_en,
		uk: AboutImg_uk,
		ru: AboutImg_ru,
	};

	return (
		<section id={homeAnchors.ABOUT} className={classNames(styles.about, {}, additional)}>
			<Container display={'grid'} className={styles.about__container}>
				<AboutTitle />
				<motion.div
					className={styles.about__img}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<Image
						className={styles.img}
						src={imageMap[locale]}
						alt={'about img'}
					/>
				</motion.div>
			</Container>
		</section>
	);
};

export { SectionAbout };