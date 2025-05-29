import type { ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './MessengerBase.module.scss';

type MessengerBaseProps = {
	className?: string;
	children: ReactNode;
};

const MessengerBase = ({ className, children }: MessengerBaseProps) => (
	<div className={classNames(styles.messenger, {}, [className])}>{children}</div>
);

export { MessengerBase };