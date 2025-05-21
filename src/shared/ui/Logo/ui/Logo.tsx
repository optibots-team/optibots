import { classNames } from '@shared/lib/classNames';
import { Link } from '@shared/config/i18n/navigation';
import { Routes } from '@shared/config/navigation/routes';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
	color?: 'dark' | 'white';
};

const Logo = ({ className, color = 'dark' }: LogoProps) => (
	<strong className={classNames(styles.logo, {}, [className, styles[color]])}>
		<Link href={Routes.HOME} className={styles.logo__link}>
			<LogoIcon />
		</Link>
	</strong>
);

export default Logo;