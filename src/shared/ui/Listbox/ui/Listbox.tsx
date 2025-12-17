import { useLayoutEffect, useRef, useState } from 'react';
import {
	Listbox as HListbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
	type ListboxOptionsProps,
} from '@headlessui/react';
import { classNames } from '@shared/lib/classNames';
import { Icon } from '@shared/ui/Icon';
import type { ColorTheme } from '@shared/types/themes.types';
import type { ListboxOption as IListboxOption } from '../model/types/listbox.types';
import styles from './Listbox.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-bottom.svg';

type ListboxProps = {
	className?: string;
	theme?: ColorTheme;
	options: IListboxOption[];
	anchor?: ListboxOptionsProps['anchor'];
	value: string;
	onChange: (value: string) => void;
};

const Listbox = (props: ListboxProps) => {
	const { className, theme = 'dark', options, anchor = 'bottom', value, onChange } = props;
	const btnRef = useRef<HTMLButtonElement>(null);
	const [btnWidth, setBtnWidth] = useState<number | undefined>();

	useLayoutEffect(() => {
		const btn = btnRef.current;
		if (!btn) return;

		const updateWidth = () => setBtnWidth(btn.getBoundingClientRect().width);

		updateWidth();

		const resizeObserver = new ResizeObserver(updateWidth);
		resizeObserver.observe(btn);

		return () => resizeObserver.disconnect();
	}, []);

	return (
		<div className={classNames(styles.listbox, {}, [className, styles[theme]])}>
			<HListbox value={value} onChange={onChange}>
				<ListboxButton ref={btnRef} className={styles.listbox__btn}>
					{value}
					<Icon icon={<ArrowIcon />} size={'16'} />
				</ListboxButton>
				<ListboxOptions
					className={classNames(styles.listbox__options, {}, [styles[theme]])}
					style={{ width: btnWidth }}
					as={'ul'}
					anchor={anchor}
					transition
				>
					{options.map(({ value, id }) => (
						<ListboxOption
							key={id}
							className={styles.listbox__option}
							as={'li'}
							value={value}
						>
							{value}
						</ListboxOption>
					))}
				</ListboxOptions>
			</HListbox>
		</div>
	);
};

export default Listbox;
