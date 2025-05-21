import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { homeAnchors } from '@shared/const/anchors';
import styles from './Nav.module.scss';

type NavProps = {
	className?: string;
};

const Nav = ({ className }: NavProps) => {
	const t = useTranslations('navigation');

	return (
		<nav className={classNames(styles.nav, {}, [className])}>
			<FlexH as={'ul'} className={styles.nav__list}>
				{Object.entries(homeAnchors).map(([key, value]) => (
					<li key={key} className={styles.nav__item}>
						<a href={`#${value}`} className={styles.nav__link}>{t(value)}</a>
					</li>
				))}
			</FlexH>
		</nav>
	);
};

export default Nav;