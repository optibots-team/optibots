import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import styles from './NavItem.module.scss';

type NavItemProps = {
	className?: string;
	value: string;
	handleClick?: () => void;
};

const NavItem = ({ className, value, handleClick }: NavItemProps) => {
	const t = useTranslations('navigation');

	return (
		<li className={classNames(styles.item, {}, [className])}>
			<a onClick={handleClick} href={`#${value}`} className={styles.item__link}>{t(value)}</a>
		</li>
	);
};

export { NavItem };