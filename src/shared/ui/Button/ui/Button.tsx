import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType, RefObject } from 'react';
import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import type { FontFamily } from '@shared/types/fontFamily.types';
import { ButtonSize, ButtonTheme } from '../model/types/button.types';
import styles from './Button.module.scss';

type ButtonProps<T extends ElementType = 'button'> = {
	as?: T;
	btnRef?: RefObject<HTMLButtonElement | null>;
	className?: string;
	theme?: ButtonTheme;
	size?: ButtonSize;
	circle?: boolean;
	uppercase?: boolean;
	fontFamily?: FontFamily;
	fluid?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
	const {
		as,
		btnRef,
		className,
		children,
		theme = 'dark',
		size = 'm',
		circle,
		uppercase = false,
		type = 'button',
		fontFamily = 'montserrat',
		fluid,
		...otherProps
	} = props;
	const Component = as || 'button';

	const mods: Mods = {
		[styles.circle]: circle,
		[styles.uppercase]: uppercase,
		[styles.fluid]: fluid,
	};

	const additional: Additional = [className, styles[size], styles[theme], styles[fontFamily]];

	const componentProps = {
		...(Component === 'button' ? { type } : {}),
		...otherProps,
	};

	return (
		<Component ref={btnRef} className={classNames(styles.btn, mods, additional)} {...componentProps}>
			{children}
		</Component>
	);
};

export default Button;