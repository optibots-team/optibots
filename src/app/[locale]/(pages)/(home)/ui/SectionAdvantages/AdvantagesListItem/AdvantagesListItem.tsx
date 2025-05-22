import Image from 'next/image';
import { classNames, type Mods } from '@shared/lib/classNames';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import { Icon, IconSize } from '@shared/ui/Icon';
import type { IAdvantage } from '../../../model/types/SectionAdvantages.types';
import styles from './AdvantagesListItem.module.scss';

type AdvantagesListItemProps = {
	className?: string;
	advantage: IAdvantage;
};

const AdvantagesListItem = (props: AdvantagesListItemProps) => {
	const { className, advantage: { id, title, subtitle, image, icon, bg } } = props;
	const mods: Mods = {
		...(bg ? { [styles[bg]]: bg } : {}),
	};
	const titleColor = bg === 'green' || bg === 'light' || id === 'turnkey'
		? TextColor.DARK
		: TextColor.WHITE;
	const textColor = id === 'support' || id === 'structure'
		? TextColor.LIGHT
		: TextColor.DARK_SECONDARY;

	return (
		<li className={classNames(styles.item, mods, [className, styles[id]])}>
			<div className={styles.item__inner}>
				<span className={styles.item__icon}>
				<Icon icon={icon} size={IconSize.SIZE_24} />
			</span>
				<Text
					title={title.toUpperCase()}
					text={subtitle}
					titleTag={'h3'}
					size={TextSize.M}
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

export { AdvantagesListItem };