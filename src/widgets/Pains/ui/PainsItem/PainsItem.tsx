'use client';

import { motion } from 'motion/react';
import { classNames } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Icon } from '@shared/ui/Icon';
import { Text } from '@shared/ui/Text';
import type { Pain } from '@entities/Pain';
import styles from './PainsItem.module.scss';

type PainsItemProps = {
	className?: string;
	pain: Pain;
};

const PainsItem = (props: PainsItemProps) => {
	const { className, pain: { id, icon, title, desc } } = props;

	return (
		<motion.li
			className={classNames(styles.item, {}, [className, styles[id]])}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<FlexH align={'center'} gap={'12'} className={styles.item__header}>
				<Icon icon={icon} size={'20'} />
				<Text
					className={styles.item__title}
					title={title.toUpperCase()}
					titleTag={'h3'}
					size={'m'}
					color={'white'}
					weight={'500'}
				/>
			</FlexH>
			<Text text={desc} color={'light'} />
		</motion.li>
	);
};

export { PainsItem };