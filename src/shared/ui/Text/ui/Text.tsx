import type { CSSProperties, ReactNode } from 'react';
import { classNames, type Additional } from '@shared/lib/classNames';
import { FlexV } from '@shared/ui/Stack';
import { getColorClass, type TextColor } from '../lib/getColorClass';
import { getSizeClass, type TextSize } from '../lib/getSizeClass';
import { getAlignClass, type TextAlign } from '../lib/getAlignClass';
import { getFontFamilyClass, type TextFontFamily } from '../lib/getFontFamilyClass';
import type { SizeToken } from '@shared/types/sizes.types';
import type { TextTitleTag } from '../model/types/text.types';
import styles from './Text.module.scss';

type TextProps = {
	className?: string;
	titleClassName?: string;
	textClassName?: string;
	style?: CSSProperties;
	title?: string | ReactNode;
	text?: string | ReactNode;
	color?: TextColor;
	size?: TextSize;
	align?: TextAlign;
	titleTag?: TextTitleTag;
	fontFamily?: TextFontFamily;
	gap?: SizeToken;
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