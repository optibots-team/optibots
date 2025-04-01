import type { CSSProperties, ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Container.module.scss';

type ContainerProps = {
	className?: string;
	fluid?: boolean;
	style?: CSSProperties;
	children: ReactNode;
};

const Container = ({ className, fluid, style, children }: ContainerProps) => (
	<div className={classNames(styles.container, { [styles.containerFluid]: fluid }, [className])} style={style}>
		{children}
	</div>
);

export default Container;