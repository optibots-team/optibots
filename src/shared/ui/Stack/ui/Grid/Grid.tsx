import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import { alignClasses, gapClasses, justifyClasses } from '../../lib/stackClasses';
import type { SizeToken } from '@shared/types/sizes.types';
import type { StackAlign, StackJustify } from '../../model/types/stack.types';
import stackStyles from '../Stack/Stack.module.scss';
import gridStyles from './Grid.module.scss';

export type GridProps<T extends ElementType = 'div'> = {
	as?: T;
	className?: string;
	children: ReactNode;
	justify?: StackJustify;
	align?: StackAlign;
	gap?: SizeToken;
	fluid?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

const Grid = <T extends ElementType = 'div'>(props: GridProps<T>) => {
	const {
		as,
		className,
		children,
		gap,
		fluid,
		justify = 'stretch',
		align = 'stretch',
		...rest
	} = props;
	const Component = as || 'div';
	const mods: Mods = {
		[stackStyles.fluid]: fluid,
	};
	const additional: Additional = [
		justifyClasses[justify],
		alignClasses[align],
		gap && gapClasses[gap],
		className,
	];

	return (
		<Component className={classNames(gridStyles.grid, mods, additional)} {...rest}>
			{children}
		</Component>
	);
};

export default Grid;