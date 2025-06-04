import type { ReactNode } from 'react';
import { classNames, type Mods, type Additional } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Icon, type IconSize } from '@shared/ui/Icon';
import { Text, type TextColorTheme, type TextSizePreset } from '@shared/ui/Text';
import type { FontFamily } from '@shared/types/fontFamily.types';
import type { SizePreset } from '@shared/types/sizes.types';
import type { IBadgeBackground } from '../model/types/badge.types';
import styles from './Badge.module.scss';

type BadgeProps = {
	className?: string;
	bordered?: boolean;
	background?: IBadgeBackground;
	size?: SizePreset;
	icon?: ReactNode;
	iconSize?: IconSize;
	text?: string;
	textColor?: TextColorTheme;
	textSize?: TextSizePreset;
	fontFamily?: FontFamily;
};

const Badge = (props: BadgeProps) => {
	const {
		className,
		bordered = false,
		background = 'dark',
		size = 'm',
		icon,
		iconSize,
		text,
		textSize = 's',
		textColor = 'green-gradient',
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