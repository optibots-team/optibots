import { classNames } from '@shared/lib/classNames';
import { Link } from '@shared/config/i18n/navigation';
import { Routes } from '@shared/config/navigation/routes';
import type { ColorTheme } from '@shared/types/Themes.types';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
	theme?: ColorTheme;
};

const Logo = ({ className, theme = 'dark' }: LogoProps) => (
	<strong className={classNames(styles.logo, {}, [className, styles[theme]])}>
		<Link href={Routes.HOME} className={styles.logo__link}>
			<LogoIcon />
		</Link>
	</strong>
);

export default Logo;