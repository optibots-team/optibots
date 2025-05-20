import type { ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import { RobotScene } from '@features/RobotScene';
import styles from './RobotLayer.module.scss';

type RobotLayerProps = {
	className?: string;
	children: ReactNode;
};

const RobotLayer = ({ className, children }: RobotLayerProps) => (
	<div className={classNames(styles.layer, {}, [className])}>
		<RobotScene className={styles.layer__robot} />
		{children}
	</div>
);

export default RobotLayer;