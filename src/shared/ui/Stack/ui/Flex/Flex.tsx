import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import { alignClasses, directionClasses, gapClasses, justifyClasses } from '../../lib/stackClasses';
import type { FlexAlign, FlexDirection, FlexGap, FlexJustify } from '../../model/types/Stack.types';
import styles from './Flex.module.scss';

export type FlexProps<T extends ElementType = 'div'> = {
	as?: T;
	className?: string;
	children: ReactNode;
	justify?: FlexJustify;
	align?: FlexAlign;
	direction?: FlexDirection;
	gap?: FlexGap;
	fluid?: boolean;
	grow?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

const Flex = <T extends ElementType = 'div'>(props: FlexProps<T>) => {
	const {
		as,
		className,
		children,
		gap,
		fluid,
		grow,
		justify = 'start',
		align = 'start',
		direction = 'row',
		...rest
	} = props;
	const Component = as || 'div';
	const mods: Mods = {
		[styles.fluid]: fluid,
		[styles.grow]: grow,
	};
	const additional: Additional = [
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gap && gapClasses[gap],
		className,
	];

	return (
		<Component className={classNames(styles.flex, mods, additional)} {...rest}>
			{children}
		</Component>
	);
};

export default Flex;