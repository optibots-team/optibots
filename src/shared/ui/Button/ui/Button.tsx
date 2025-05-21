import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType } from 'react';
import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import type { FontFamily } from '@shared/types/FontFamily.types';
import { ButtonSize, ButtonTheme } from '../model/types/Button.types';
import styles from './Button.module.scss';

type ButtonProps<T extends ElementType = 'button'> = {
	as?: T;
	className?: string;
	theme?: ButtonTheme;
	size?: ButtonSize;
	circle?: boolean;
	uppercase?: boolean;
	fontFamily?: FontFamily;
} & ButtonHTMLAttributes<HTMLButtonElement> & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
	const {
		as,
		className,
		children,
		theme = ButtonTheme.BLACK,
		size = ButtonSize.M,
		circle,
		uppercase = false,
		type = 'button',
		fontFamily = 'montserrat',
		...otherProps
	} = props;
	const Component = as || 'button';

	const mods: Mods = {
		[styles.circle]: circle,
		[styles.uppercase]: uppercase,
	};

	const additional: Additional = [className, styles[size], styles[theme], styles[fontFamily]];

	const componentProps = {
		...(Component === 'button' ? { type } : {}),
		...otherProps,
	};

	return (
		<Component className={classNames(styles.btn, mods, additional)} {...componentProps}>
			{children}
		</Component>
	);
};

export default Button;