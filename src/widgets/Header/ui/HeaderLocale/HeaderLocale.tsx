'use client';

import { LocaleSwitcher } from '@features/LocaleSwitcher';
import { useAppStore, selectIsMenuOpen } from '@entities/App';

type HeaderLocaleProps = {
	className?: string;
};

const HeaderLocale = ({ className }: HeaderLocaleProps) => {
	const isMenuOpen = useAppStore(selectIsMenuOpen);

	return <LocaleSwitcher className={className} theme={isMenuOpen ? 'light' : 'dark'} />;
};

export { HeaderLocale };