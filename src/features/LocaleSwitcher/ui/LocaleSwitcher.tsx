'use client';

import { useCallback, type ChangeEvent } from 'react';
import { useLocale } from 'use-intl';
import { classNames } from '@shared/lib/classNames';
import { Select } from '@shared/ui/Select';
import { usePathname, useRouter } from '@shared/config/i18n/navigation';
import { switcherOptions } from '../model/data/localeSwitcher.data';
import styles from './LocaleSwitcher.module.scss';

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
		<div className={classNames(styles.switcher, {}, [className])}>
			<Select options={switcherOptions} defaultValue={currentLocale} onChange={handleChangeLocale}/>
		</div>
	);
};

export default LocaleSwitcher;