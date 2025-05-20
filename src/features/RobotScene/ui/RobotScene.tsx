import Spline from '@splinetool/react-spline/next';
import { classNames } from '@shared/lib/classNames';
import { externalLinks } from '@shared/const/externalLinks';
import styles from './RobotScene.module.scss';

type RobotSceneProps = {
	className?: string;
};

const RobotScene = ({ className }: RobotSceneProps) => (
	<div className={classNames(styles.scene, {}, [className])}>
		<Spline scene={externalLinks.robotsScene} />
	</div>
);

export default RobotScene;