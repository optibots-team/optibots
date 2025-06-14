'use client';

import { useCallback } from 'react';
import { useLocale } from 'use-intl';
import { classNames } from '@shared/lib/classNames';
import { toRouterLocale, toVisibleLocale } from '../lib/locales';
import { Listbox } from '@shared/ui/Listbox';
import { usePathname, useRouter } from '@shared/config/i18n/navigation';
import { switcherOptions } from '../model/data/localeSwitcher.data';
import type { ColorTheme } from '@shared/types/themes.types';
import styles from './LocaleSwitcher.module.scss';

type LocaleSwitcherProps = {
	className?: string;
	theme?: ColorTheme;
	anchor?: 'top' | 'bottom';
};

const LocaleSwitcher = ({ className, anchor = 'bottom', theme = 'dark' }: LocaleSwitcherProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const currentLocale = useLocale();
	const listboxLocale = toVisibleLocale(currentLocale);

	const handleChangeLocale = useCallback(
		(newLocale: string) => router.replace({ pathname }, { locale: toRouterLocale(newLocale) }),
		[pathname, router]
	);

	return (
		<Listbox
			className={classNames(styles.listbox, {}, [className])}
			options={switcherOptions.filter((option) => option.id !== currentLocale)}
			value={listboxLocale}
			onChange={handleChangeLocale}
			anchor={{ to: anchor, gap: '-40%' }}
			theme={theme}
		/>
	);
};

export default LocaleSwitcher;