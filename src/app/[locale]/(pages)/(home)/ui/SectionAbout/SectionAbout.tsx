'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { motion } from 'motion/react';
import { classNames, type Additional } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { AboutTitle } from './AboutTitle';
import { homeAnchors } from '@shared/const/anchors';
import styles from './SectionAbout.module.scss';

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
		en: '/images/home-page/about/img_01_en.svg',
		uk: '/images/home-page/about/img_01_uk.svg',
		ru: '/images/home-page/about/img_01_ru.svg',
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
						width={100}
						height={100}
					/>
				</motion.div>
			</Container>
		</section>
	);
};

export { SectionAbout };
