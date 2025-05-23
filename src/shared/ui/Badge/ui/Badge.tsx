import type { ReactNode } from 'react';
import { classNames, type Mods, type Additional } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Icon, IconSize } from '@shared/ui/Icon';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import type { FontFamily } from '@shared/types/FontFamily.types';
import type { IBadgeBackground, IBadgeSize } from '../model/types/Badge.types';
import styles from './Badge.module.scss';

type BadgeProps = {
	className?: string;
	bordered?: boolean;
	background?: IBadgeBackground;
	size?: IBadgeSize;
	icon?: ReactNode;
	iconSize?: IconSize;
	text?: string;
	textColor?: TextColor;
	textSize?: TextSize;
	fontFamily?: FontFamily;
};

const Badge = (props: BadgeProps) => {
	const {
		className,
		bordered = false,
		background = 'dark',
		size = 'm',
		icon,
		iconSize = IconSize.SIZE_16,
		text,
		textSize = TextSize.S,
		textColor = TextColor.GREEN_GRADIENT,
		fontFamily,
	} = props;

	const mods: Mods = {
		[styles.bordered]: bordered,
	};
	const additional: Additional = [className, styles[background], styles[size]];

	if (!icon && !text) return null;

	return (
		<FlexH
			align={'center'}
			justify={'center'}
			gap={'8'}
			className={classNames(styles.badge, mods, additional)}
		>
			{icon && <Icon icon={icon} size={iconSize} />}
			{text && <Text text={text} size={textSize} color={textColor} fontFamily={fontFamily} />}
		</FlexH>
	);
};

export default Badge;