import type { CSSProperties, ReactNode } from 'react';
import { classNames, type Mods } from '@shared/lib/classNames';
import type { Display, Orientation } from '@shared/types/layout.types';
import styles from './Container.module.scss';

type ContainerProps = {
	className?: string;
	fluid?: boolean;
	display?: Display;
	orientation?: Orientation;
	style?: CSSProperties;
	children: ReactNode;
};

const Container = (props: ContainerProps) => {
	const { className, fluid, display, orientation, style, children } = props;
	const mods: Mods = {
		[styles.fluid]: fluid,
		[styles.flex]: display === 'flex',
		[styles.grid]: display === 'grid',
		[styles.horizontal]: orientation === 'horizontal',
		[styles.vertical]: orientation === 'vertical',
	};

	return (
		<div className={classNames(styles.container, mods, [className])} style={style}>
			{children}
		</div>
	);
};

export default Container;