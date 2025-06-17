'use client';

import { useCallback, useEffect, useRef, type MouseEvent } from 'react';
import { useTranslations } from 'next-intl';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { classNames, type Mods } from '@shared/lib/classNames';
import { Flex, FlexV } from '@shared/ui/Stack';
import { Button } from '@shared/ui/Button';
import { Socials } from '@features/Socials';
import { NavItem } from '../NavItem/NavItem';
import { useAppStore, selectIsMenuOpen, selectCloseMenu } from '@entities/App';
import { homeAnchors } from '@shared/const/anchors';
import type { ColorTheme } from '@shared/types/themes.types';
import styles from './Nav.module.scss';

type NavProps = {
	className?: string;
	theme?: ColorTheme;
	location?: 'header' | 'footer';
};

const Nav = ({ className, theme, location = 'header' }: NavProps) => {
	const navRef = useRef<HTMLDivElement>(null);
	const isOpen = useAppStore(selectIsMenuOpen);
	const closeMenu = useAppStore(selectCloseMenu);
	const t = useTranslations('buttons');

	const mods: Mods = {
		[styles.open]: isOpen,
		...(theme ? { [styles[theme]]: theme } : {}),
	};

	const handleOverlayClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			closeMenu();
		}
	}, [closeMenu]);

	useEffect(() => {
		if (isOpen && navRef.current) {
			disableBodyScroll(navRef.current);
		} else {
			clearAllBodyScrollLocks();
		}
	}, [isOpen]);

	return (
		<nav
			ref={navRef}
			className={classNames(styles.nav, mods, [className, styles[location]])}
			onClick={handleOverlayClick}
		>
			<FlexV justify={'between'} align={'stretch'} gap={'10'} className={styles.nav__inner}>
				<Flex as={'ul'} className={styles.nav__list}>
					{Object.entries(homeAnchors)
						.filter(([key]) => key !== 'ADVANTAGES')
						.map(([key, value]) => (
							<NavItem key={key} value={value} handleClick={closeMenu} />
						))}
				</Flex>
				<div className={styles.nav__contacts}>
					<Socials />
					<Button theme={'green-gradient'} fontFamily={'unbounded'} className={'fw-500'} fluid>
						{t('order bot').toUpperCase()}
					</Button>
				</div>
			</FlexV>
		</nav>
	);
};

export default Nav;