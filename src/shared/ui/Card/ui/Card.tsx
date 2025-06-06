import type { ElementType, ReactNode } from 'react';
import { classNames, type Mods } from '@shared/lib/classNames';
import type { SizePreset } from '@shared/types/sizes.types';
import styles from './Card.module.scss';

type CardProps<T extends ElementType = 'div'> = {
	as?: T;
	className?: string;
	children?: ReactNode;
	radius?: SizePreset;
	padding?: SizePreset;
};

const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
	const { as, className, children, radius, padding } = props;
	const Component = as || 'div';
	const mods: Mods = {
		[styles[`radius-${radius}`]]: radius,
		[styles[`padding-${padding}`]]: padding,
	};

	return (
		<Component className={classNames(styles.card, mods, [className])}>
			{children}
		</Component>
	);
};

export default Card;