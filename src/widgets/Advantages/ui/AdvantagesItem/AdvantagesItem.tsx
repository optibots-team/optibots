import Image from 'next/image';
import { classNames, type Mods } from '@shared/lib/classNames';
import { Text, type TextColorTheme } from '@shared/ui/Text';
import { Icon } from '@shared/ui/Icon';
import type { Advantage } from '@entities/Advantage';
import styles from './AdvantagesItem.module.scss';

type AdvantagesItemProps = {
	className?: string;
	advantage: Advantage;
};

const AdvantagesItem = (props: AdvantagesItemProps) => {
	const { className, advantage: { id, title, subtitle, image, icon, bg } } = props;
	const mods: Mods = {
		...(bg ? { [styles[bg]]: bg } : {}),
	};
	const titleColor: TextColorTheme = bg === 'green' || bg === 'light' || id === 'turnkey'
		? 'dark'
		: 'white';
	const textColor: TextColorTheme = id === 'support' || id === 'structure'
		? 'light'
		: 'dark-secondary';

	return (
		<li className={classNames(styles.item, mods, [className, styles[id]])}>
			<div className={styles.item__inner}>
				<span className={styles.item__icon}><Icon icon={icon} size={'24'} /></span>
				<Text
					title={title.toUpperCase()}
					text={subtitle}
					titleTag={'h3'}
					size={'m'}
					color={{ title: titleColor, text: textColor }}
					gap={'12'}
				/>
			</div>
			{image && (
				<div className={styles['item__img-wrapper']}>
					<Image
						className={styles.item__img}
						src={image}
						alt={title}
					/>
				</div>
			)}
		</li>
	);
};

export { AdvantagesItem };