import type { FlexAlign, FlexDirection, FlexGap, FlexJustify } from '../model/types/Stack.types';
import styles from '../ui/Flex/Flex.module.scss';

export const justifyClasses: Record<FlexJustify, string> = {
	start: styles['justify-start'],
	center: styles['justify-center'],
	end: styles['justify-end'],
	between: styles['justify-between'],
	around: styles['justify-around'],
	stretch: styles['justify-stretch'],
};

export const alignClasses: Record<FlexAlign, string> = {
	start: styles['align-start'],
	center: styles['align-center'],
	end: styles['align-end'],
	stretch: styles['align-stretch'],
};

export const directionClasses: Record<FlexDirection, string> = {
	row: styles['direction-row'],
	column: styles['direction-column'],
};

export const gapClasses: Record<FlexGap, string> = {
	2: styles['gap-2'],
	4: styles['gap-4'],
	6: styles['gap-6'],
	8: styles['gap-8'],
	10: styles['gap-10'],
	12: styles['gap-12'],
	14: styles['gap-14'],
	16: styles['gap-16'],
	18: styles['gap-18'],
	20: styles['gap-20'],
	24: styles['gap-24'],
	28: styles['gap-28'],
	32: styles['gap-32'],
	36: styles['gap-36'],
	40: styles['gap-40'],
};