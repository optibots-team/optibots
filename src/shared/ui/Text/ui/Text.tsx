import type { CSSProperties, ReactNode } from 'react';
import { classNames, type Additional } from '@shared/lib/classNames';
import { FlexV } from '@shared/ui/Stack';
import { getColorClass } from '../lib/getColorClass';
import { getSizeClasses } from '../lib/getSizeClass';
import { getAlignClass } from '../lib/getAlignClass';
import { getFontFamilyClass } from '../lib/getFontFamilyClass';
import type { SizeToken } from '@shared/types/sizes.types';
import type { TextSizeResponsive, TextAlign, TextColor, TextFontFamily, TextTitleTag } from '../model/types/text.types';
import styles from './Text.module.scss';

type TextProps = {
	className?: string;
	titleClassName?: string;
	textClassName?: string;
	style?: CSSProperties;
	title?: string | ReactNode;
	text?: string | ReactNode;
	color?: TextColor;
	size?: TextSizeResponsive;
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
		...getSizeClasses({ element: 'title', size, styles }),
		styles[getColorClass('title', color)],
		styles[getAlignClass('title', align)],
		styles[getFontFamilyClass('title', fontFamily)],
		titleClassName,
	];
	const textAdditional: Additional = [
		...getSizeClasses({ element: 'text', size, styles }),
		styles[getColorClass('text', color)],
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