'use client';

import { useCallback, type ChangeEvent } from 'react';
import { useLocale } from 'use-intl';
import { Select } from '@shared/ui/Select';
import { usePathname, useRouter } from '@shared/config/i18n/navigation';
import { switcherOptions } from '../model/data/localeSwitcher.data';
import type { ColorTheme } from '@shared/types/themes.types';

type LocaleSwitcherProps = {
	className?: string;
	theme?: ColorTheme;
};

const LocaleSwitcher = ({ className, theme = 'dark' }: LocaleSwitcherProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const currentLocale = useLocale();

	const handleChangeLocale = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			const newLocale = e.target.value;

			router.replace({ pathname }, { locale: newLocale });
		},
		[pathname, router]
	);

	return (
		<Select
			className={className}
			options={switcherOptions}
			value={currentLocale}
			onChange={handleChangeLocale}
			theme={theme}
		/>
	);
};

export default LocaleSwitcher;