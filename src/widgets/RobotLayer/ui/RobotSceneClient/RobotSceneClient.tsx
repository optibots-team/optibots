'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { classNames } from '@shared/lib/classNames';
import styles from './RobotSceneClient.module.scss';

const RobotScene = dynamic(() => import('@features/RobotScene').then(mod => mod.RobotScene), {
	ssr: false,
	loading: () => null,
});

type RobotSceneClientProps = {
	className?: string;
};

const RobotSceneClient = ({ className }: RobotSceneClientProps) => (
	<Suspense fallback={null}>
		<RobotScene className={classNames(styles.robot, {}, [className])} />
	</Suspense>
);

export { RobotSceneClient };