'use client';

import { useTranslations } from 'next-intl';
import { useMedia } from '@shared/hooks/useMedia';
import { classNames, type Mods } from '@shared/lib/classNames';
import { Flex, FlexV } from '@shared/ui/Stack';
import { Button } from '@shared/ui/Button';
import { Socials } from '@features/Socials';
import { NavItem } from '../NavItem/NavItem';
import { useAppStore, selectIsMenuOpen, selectToggleMenu } from '@entities/App';
import { homeAnchors } from '@shared/const/anchors';
import type { ColorTheme } from '@shared/types/themes.types';
import styles from './Nav.module.scss';

type NavProps = {
	className?: string;
	theme?: ColorTheme;
	location?: 'header' | 'footer';
};

const Nav = ({ className, theme, location = 'header' }: NavProps) => {
	const isOpen = useAppStore(selectIsMenuOpen);
	const toggleMenu = useAppStore(selectToggleMenu);
	const { isTablet } = useMedia();
	const t = useTranslations('buttons');

	const mods: Mods = {
		[styles.open]: isOpen,
		...(theme ? { [styles[theme]]: theme } : {})
	};

	return (
		<nav className={classNames(styles.nav, mods, [className, styles[location]])}>
			<Flex as={'ul'} className={styles.nav__list}>
				{Object.entries(homeAnchors).map(([key, value]) => (
					<NavItem key={key} value={value} />
				))}
			</Flex>
			{isTablet && location === 'header' && (
				<FlexV align={'center'} justify={'center'} gap={'32'}>
					<Socials />
					<Button theme={'white'}>
						{t('order bot').toUpperCase()}
					</Button>
				</FlexV>
			)}
		</nav>
	);
};

export default Nav;