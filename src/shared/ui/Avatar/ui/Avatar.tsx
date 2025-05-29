import type { StaticImageData } from 'next/image';
import { isValidElement, type ReactElement } from 'react';
import { classNames } from '@shared/lib/classNames';
import { isStaticImageData } from '@shared/lib/isStaticImageData';
import styles from './Avatar.module.scss';

type AvatarProps = {
	className?: string;
	size?: number;
	circle?: boolean;
	avatar: StaticImageData | ReactElement | string;
	alt?: string;
};

const Avatar = (props: AvatarProps) => {
	const {
		className,
		size = 40,
		circle = true,
		avatar,
		alt = 'avatar',
	} = props;
	const isImage = typeof avatar === 'string' || isStaticImageData(avatar);
	const isIcon = isValidElement(avatar);

	return (
		<div className={classNames(styles.avatar, {}, [className])}>

		</div>
	);
};

export default Avatar;