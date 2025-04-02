import type { SelectHTMLAttributes } from 'react';
import { classNames } from '@shared/lib/classNames';
import type { ISelectOptions } from '../model/types/Select.types';
import styles from './Select.module.scss';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	label?: string;
	options: ISelectOptions[];
}

const Select = (props: SelectProps) => {
	const { className, label, options, ...otherProps } = props;

	return (
		<label className={classNames(styles.select, {}, [className])}>
			{label && <p className={styles.select__caption}>{label}</p>}
			<select
				className={classNames(styles.select__field, {}, [])}
				{...otherProps}
			>
				{options.map(({ value, label }) =>
					<option key={value} value={value}>{label}</option>
				)}
			</select>
		</label>
	);
};

export default Select;
