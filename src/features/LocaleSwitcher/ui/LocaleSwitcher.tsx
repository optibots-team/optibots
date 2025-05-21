'use client';

import { useCallback, type ChangeEvent } from 'react';
import { useLocale } from 'use-intl';
import { Select } from '@shared/ui/Select';
import { usePathname, useRouter } from '@shared/config/i18n/navigation';
import { switcherOptions } from '../model/data/localeSwitcher.data';

type LocaleSwitcherProps = {
	className?: string;
};

const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
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
			defaultValue={currentLocale}
			onChange={handleChangeLocale}
		/>
	);
};

export default LocaleSwitcher;