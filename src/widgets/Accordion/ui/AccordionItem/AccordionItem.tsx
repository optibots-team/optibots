'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { classNames } from '@shared/lib/classNames';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import { Icon, IconSize } from '@shared/ui/Icon';
import { ColorTheme } from '@shared/types/Themes.types';
import type { IAccordionItem } from '../../model/types/Accordion.types';
import styles from './AccordionItem.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-bottom.svg';

type AccordionItemProps = {
	className?: string;
	item: IAccordionItem;
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
						{counter && (
							<span className={styles.item__counter}>
								{String(counter).padStart(2, '0')}/
							</span>
						)}
						<Text
							title={title.toUpperCase()}
							titleTag={'h3'}
							color={theme === 'light' ? TextColor.WHITE : TextColor.DARK}
							size={TextSize.ML}
							className={'fw-600'}
						/>
						<span className={classNames(styles.item__arrow, { [styles.open]: open }, [])}>
							<Icon icon={<ArrowIcon />} size={IconSize.SIZE_24} />
						</span>
					</DisclosureButton>
					<DisclosurePanel>
						<Text
							text={content}
							color={theme === 'light' ? TextColor.LIGHT : TextColor.DARK}
							className={styles.item__content}
						/>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

export { AccordionItem };