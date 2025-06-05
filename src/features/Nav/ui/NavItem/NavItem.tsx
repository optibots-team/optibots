import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import styles from './NavItem.module.scss';

type NavItemProps = {
	className?: string;
	value: string;
};

const NavItem = ({ className, value }: NavItemProps) => {
	const t = useTranslations('navigation');

	return (
		<li className={classNames(styles.item, {}, [className])}>
			<a href={`#${value}`} className={styles.item__link}>{t(value)}</a>
		</li>
	);
};

export { NavItem };