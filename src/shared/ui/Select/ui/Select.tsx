import type { SelectHTMLAttributes } from 'react';
import { Field, Label, Select as HSelect } from '@headlessui/react'
import { classNames } from '@shared/lib/classNames';
import { Icon, IconSize } from '@shared/ui/Icon';
import type { ColorTheme } from '@shared/types/Themes.types';
import type { ISelectOptions } from '../model/types/Select.types';
import styles from './Select.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-bottom.svg';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	label?: string;
	options: ISelectOptions[];
	theme?: ColorTheme;
}

const Select = (props: SelectProps) => {
	const { className, label, options, theme = 'dark', ...otherProps } = props;

	return (
		<Field className={classNames(styles.field, {}, [className, styles[theme]])}>
			{label && <Label className={styles.field__label}>{label}</Label>}
			<div className={styles.field__wrapper}>
				<HSelect className={classNames(styles.field__select, {}, [])} {...otherProps}>
					{options.map(({ value, label }) => (
						<option key={value} value={value}>{label}</option>
					))}
				</HSelect>
				<Icon icon={<ArrowIcon />} size={IconSize.SIZE_16} className={styles.field__arrow} />
			</div>
		</Field>
	);
};

export default Select;
