import Image, { type StaticImageData } from 'next/image';
import type { ReactNode, CSSProperties } from 'react';
import { classNames, type Mods } from '@shared/lib/classNames';
import { isStaticImageData } from '@shared/lib/isStaticImageData';
import { Icon, IconSize } from '@shared/ui/Icon';
import styles from './Avatar.module.scss';

type AvatarProps = {
	className?: string;
	size?: number;
	iconSize?: IconSize;
	circle?: boolean;
	avatar: StaticImageData | ReactNode | string;
	alt?: string;
};

const Avatar = (props: AvatarProps) => {
	const {
		className,
		size,
		iconSize,
		circle = true,
		avatar,
		alt = 'avatar',
	} = props;

	const mods: Mods = {
		[styles.circle]: circle,
	};

	const style: CSSProperties = {
		width: size,
		height: size,
	};

	return (
		<span className={classNames(styles.avatar, mods, [className])} style={style}>
			{typeof avatar === 'string' || isStaticImageData(avatar) ? (
				<Image
					className={styles.avatar__img}
					src={avatar}
					alt={alt}
					fill
				/>
			) : (
				<Icon
					icon={avatar}
					size={iconSize}
				/>
			)}
		</span>
	);
};

export default Avatar;