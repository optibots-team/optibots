'use client';

import { classNames } from '@shared/lib/classNames';
import { Button } from '@shared/ui/Button';
import { useAppStore, selectIsMenuOpen, selectToggleMenu } from '@entities/App';
import styles from './Hamburger.module.scss';

type HamburgerProps = {
	className?: string;
};

const Hamburger = ({ className }: HamburgerProps) => {
	const isOpen = useAppStore(selectIsMenuOpen);
	const toggleMenu = useAppStore(selectToggleMenu);

	return (
		<Button
			className={classNames(styles.hamburger, { [styles.open]: isOpen }, [className])}
			theme={'white'}
			size={'custom'}
			onClick={toggleMenu}
		>
			<span />
			<span />
			<span />
		</Button>
	);
};

export default Hamburger;