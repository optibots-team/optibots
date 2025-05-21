import type { CSSProperties } from 'react';
import { classNames, type Additional } from '@shared/lib/classNames';
import { FlexV, type FlexGap } from '@shared/ui/Stack';
import { getColorClass, TextColorProps } from '../lib/getColorClass';
import { getSizeClass, TextSizeProps } from '../lib/getSizeClass';
import { getAlignClass, TextAlignProps } from '../lib/getAlignClass';
import type { TextTitleTag } from '../model/types/Text.types';
import styles from './Text.module.scss';

type TextProps = {
	className?: string;
	titleClassName?: string;
	textClassName?: string;
	style?: CSSProperties;
	title?: string;
	text?: string;
	color?: TextColorProps;
	size?: TextSizeProps;
	align?: TextAlignProps;
	titleTag?: TextTitleTag;
	fontFamily?: 'montserrat' | 'unbounded';
	gap?: FlexGap;
};

const Text = (props: TextProps) => {
	const {
		className,
		titleClassName,
		textClassName,
		style,
		title,
		text,
		color,
		size,
		align,
		titleTag,
		fontFamily = 'montserrat',
		gap = '6',
	} = props;
	const titleAdditional: Additional = [
		styles[getColorClass('title', color)],
		styles[getSizeClass('title', size)],
		styles[getAlignClass('title', align)],
		titleClassName,
	];
	const textAdditional: Additional = [
		styles[getColorClass('text', color)],
		styles[getSizeClass('text', size)],
		styles[getAlignClass('text', align)],
		textClassName,
	];
	const TitleTag = titleTag ?? 'h2';

	if (!title && !text) return null;

	return (
		<FlexV gap={gap} className={classNames('', {}, [className, styles[fontFamily]])} style={style}>
			{title && <TitleTag className={classNames('', {}, titleAdditional)}>{title}</TitleTag>}
			{text && <p className={classNames('', {}, textAdditional)}>{text}</p>}
		</FlexV>
	);
};

export default Text;