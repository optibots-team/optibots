import type { SizeToken } from '@shared/types/sizes.types';
import type { StackAlign, FlexDirection, StackJustify } from '../model/types/stack.types';
import stackStyles from '../ui/Stack/Stack.module.scss';
import flexStyles from '../ui/Flex/Flex.module.scss';

export const justifyClasses: Record<StackJustify, string> = {
	start: stackStyles['justify-start'],
	center: stackStyles['justify-center'],
	end: stackStyles['justify-end'],
	between: stackStyles['justify-between'],
	around: stackStyles['justify-around'],
	stretch: stackStyles['justify-stretch'],
};

export const alignClasses: Record<StackAlign, string> = {
	start: stackStyles['align-start'],
	center: stackStyles['align-center'],
	end: stackStyles['align-end'],
	stretch: stackStyles['align-stretch'],
};

export const directionClasses: Record<FlexDirection, string> = {
	row: flexStyles['direction-row'],
	column: flexStyles['direction-column'],
};

export const gapClasses: Record<SizeToken, string> = {
	0: stackStyles['gap-0'],
	2: stackStyles['gap-2'],
	4: stackStyles['gap-4'],
	6: stackStyles['gap-6'],
	8: stackStyles['gap-8'],
	10: stackStyles['gap-10'],
	12: stackStyles['gap-12'],
	14: stackStyles['gap-14'],
	16: stackStyles['gap-16'],
	18: stackStyles['gap-18'],
	20: stackStyles['gap-20'],
	22: stackStyles['gap-22'],
	24: stackStyles['gap-24'],
	26: stackStyles['gap-26'],
	28: stackStyles['gap-28'],
	30: stackStyles['gap-30'],
	32: stackStyles['gap-32'],
	34: stackStyles['gap-34'],
	36: stackStyles['gap-36'],
	38: stackStyles['gap-38'],
	40: stackStyles['gap-40'],
	42: stackStyles['gap-42'],
	44: stackStyles['gap-44'],
	46: stackStyles['gap-46'],
	48: stackStyles['gap-48'],
	50: stackStyles['gap-50'],
};