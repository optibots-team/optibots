'use client';

import Spline from '@splinetool/react-spline';
import { useMedia } from '@shared/hooks/useMedia';
import { classNames } from '@shared/lib/classNames';
import { externalLinks } from '@shared/const/externalLinks';
import styles from './RobotScene.module.scss';

type RobotSceneProps = {
	className?: string;
};

const RobotScene = ({ className }: RobotSceneProps) => {
	const { isTablet } = useMedia();

	if (isTablet) return null;

	return (
		<div className={classNames(styles.scene, {}, [className])}>
			<Spline scene={externalLinks.robotsScene} />
		</div>
	);
};

export default RobotScene;