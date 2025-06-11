'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { classNames } from '@shared/lib/classNames';
import { Text } from '@shared/ui/Text';
import { Icon } from '@shared/ui/Icon';
import type { ColorTheme } from '@shared/types/themes.types';
import type { AccordionItem } from '../../model/types/accordion.types';
import styles from './AccordionItem.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-bottom.svg';

type AccordionItemProps = {
	className?: string;
	item: AccordionItem;
	counter?: number | null;
	theme: ColorTheme;
};

const AccordionItem = (props: AccordionItemProps) => {
	const { className, counter, theme, item: { title, content, defaultOpen } } = props;

	return (
		<Disclosure
			as={'li'}
			defaultOpen={defaultOpen}
			className={classNames(styles.item, { [styles.offset]: !!counter }, [className, styles[theme]])}
		>
			{({ open }) => (
				<>
					<DisclosureButton as={'div'} className={styles.item__trigger}>
						<h3 className={styles.item__title}>
							{counter && (
								<span className={styles.item__counter}>
									{String(counter).padStart(2, '0')}/
								</span>
							)}
							{title.toUpperCase()}
						</h3>
						<span className={classNames(styles.item__arrow, { [styles.open]: open }, [])}>
							<Icon icon={<ArrowIcon />} size={'24'} />
						</span>
					</DisclosureButton>
					<DisclosurePanel>
						<Text
							text={content}
							color={theme}
							className={styles.item__content}
						/>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

export { AccordionItem };