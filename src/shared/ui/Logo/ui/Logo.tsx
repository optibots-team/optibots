import { classNames } from '@shared/lib/classNames';
import { Link } from '@shared/config/i18n/navigation';
import { Routes } from '@shared/config/navigation/routes';
import type { ColorTheme } from '@shared/types/themes.types';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
	theme?: ColorTheme;
};

const Logo = ({ className, theme }: LogoProps) => (
	<strong className={classNames(styles.logo, { ...(theme ? { [styles[theme]]: theme } : {}) }, [className])}>
		<Link href={Routes.HOME} className={styles.logo__link}>
			<LogoIcon />
		</Link>
	</strong>
);

export default Logo;