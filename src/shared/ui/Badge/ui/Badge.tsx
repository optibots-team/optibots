import type { ReactNode } from 'react';
import { classNames, type Mods } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Icon, IconSize } from '@shared/ui/Icon';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import styles from './Badge.module.scss';

type BadgeProps = {
	className?: string;
	bordered?: boolean;
	icon?: ReactNode;
	iconSize?: IconSize;
	text?: string;
	textColor?: TextColor;
	textSize?: TextSize;
};

const Badge = (props: BadgeProps) => {
	const {
		className,
		bordered = false,
		icon,
		iconSize = IconSize.SIZE_16,
		text,
		textSize = TextSize.S,
		textColor = TextColor.GREEN_GRADIENT,
	} = props;

	const mods: Mods = {
		[styles.bordered]: bordered,
	};

	if (!icon && !text) return null;

	return (
		<FlexH align={'center'} justify={'center'} gap={'8'} className={classNames(styles.badge, mods, [className])}>
			{icon && <Icon icon={icon} size={iconSize} />}
			{text && <Text text={text} size={textSize} color={textColor} />}
		</FlexH>
	);
};

export default Badge;