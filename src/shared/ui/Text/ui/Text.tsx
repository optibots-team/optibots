import type { CSSProperties } from 'react';
import { classNames, type Additional } from '@shared/lib/classNames';
import { FlexV, type FlexGap } from '@shared/ui/Stack';
import { getColorClass, type TextColorProps } from '../lib/getColorClass';
import { getSizeClass, type TextSizeProps } from '../lib/getSizeClass';
import { getAlignClass, type TextAlignProps } from '../lib/getAlignClass';
import { getFontFamilyClass, type TextFontFamilyProps } from '../lib/getFontFamilyClass';
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
	fontFamily?: TextFontFamilyProps;
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
		fontFamily,
		gap = '6',
	} = props;
	const titleAdditional: Additional = [
		styles[getColorClass('title', color)],
		styles[getSizeClass('title', size)],
		styles[getAlignClass('title', align)],
		styles[getFontFamilyClass('title', fontFamily)],
		titleClassName,
	];
	const textAdditional: Additional = [
		styles[getColorClass('text', color)],
		styles[getSizeClass('text', size)],
		styles[getAlignClass('text', align)],
		styles[getFontFamilyClass('text', fontFamily)],
		textClassName,
	];
	const TitleTag = titleTag ?? 'h2';

	if (!title && !text) return null;

	return (
		<FlexV gap={gap} className={className} style={style}>
			{title && <TitleTag className={classNames('', {}, titleAdditional)}>{title}</TitleTag>}
			{text && <p className={classNames('', {}, textAdditional)}>{text}</p>}
		</FlexV>
	);
};

export default Text;