'use client'

import Spline from '@splinetool/react-spline';
import { classNames } from '@shared/lib/classNames';
import styles from './RobotScene.module.scss';

type RobotSceneProps = {
	className?: string;
};

const RobotScene = ({ className }: RobotSceneProps) => (
	<div className={classNames(styles.scene, {}, [className])}>
		<Spline scene={'https://prod.spline.design/sxUU8Pda7SsKdoDG/scene.splinecode'} />
	</div>
);

export default RobotScene;