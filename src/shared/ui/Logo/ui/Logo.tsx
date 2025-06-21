import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import { Link } from '@shared/config/i18n/navigation';
import { Routes } from '@shared/config/navigation/routes';
import type { ColorTheme } from '@shared/types/themes.types';
import type { SizePreset } from '@shared/types/sizes.types';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
	theme?: ColorTheme;
	size?: SizePreset;
};

const Logo = ({ className, theme, size = 'm' }: LogoProps) => {
	const mods: Mods = {
		...(theme ? { [styles[theme]]: theme } : {}),
	};
	const additional: Additional = [
		className,
		styles[size],
	];

	return (
		<strong className={classNames(styles.logo, mods, additional)}>
			<Link href={Routes.HOME} className={styles.logo__link} aria-label={'logo link'}>
				<LogoIcon />
			</Link>
		</strong>
	);
};

export default Logo;