import type { ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import { RobotSceneClient } from '../RobotSceneClient/RobotSceneClient';
import styles from './RobotLayer.module.scss';

type RobotLayerProps = {
	className?: string;
	children: ReactNode;
};

const RobotLayer = ({ className, children }: RobotLayerProps) => (
	<div className={classNames(styles.layer, {}, [className])}>
		<div className={classNames(styles.layer__inner, {}, ['section-radius-bottom'])}>
			<RobotSceneClient />
			{children}
		</div>
	</div>
);

export default RobotLayer;