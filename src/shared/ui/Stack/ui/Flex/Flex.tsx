import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import { alignClasses, directionClasses, gapClasses, justifyClasses } from '../../lib/stackClasses';
import type { SizeToken } from '@shared/types/sizes.types';
import type { StackAlign, FlexDirection, StackJustify } from '../../model/types/stack.types';
import stackStyles from '../Stack/Stack.module.scss';
import flexStyles from './Flex.module.scss';

export type FlexProps<T extends ElementType = 'div'> = {
	as?: T;
	className?: string;
	children: ReactNode;
	justify?: StackJustify;
	align?: StackAlign;
	direction?: FlexDirection;
	gap?: SizeToken;
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
		[stackStyles.fluid]: fluid,
		[flexStyles.grow]: grow,
	};
	const additional: Additional = [
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gap && gapClasses[gap],
		className,
	];

	return (
		<Component className={classNames(flexStyles.flex, mods, additional)} {...rest}>
			{children}
		</Component>
	);
};

export default Flex;