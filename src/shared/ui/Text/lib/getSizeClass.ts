import type { TextSize, TextElement, TextSizeResponsive } from '../model/types/text.types';

const DEFAULT_SIZE: Record<TextElement, TextSize> = {
	title: 'l',
	text: 'm',
};

interface getSizeClassesProps {
	element: TextElement;
	size?: TextSizeResponsive;
	styles: Record<string, string>;
}

interface resolveTextSizeProps {
	input?: TextSizeResponsive;
	element: TextElement;
	mode: 'desktop' | 'mobile';
}

const resolveTextSize = ({ mode, element, input }: resolveTextSizeProps): TextSize => {
	if (!input) return DEFAULT_SIZE[element];

	if (typeof input === 'string') return input;

	const source = input[mode] ?? input;

	if (typeof source === 'string') return source;

	return source[element] ?? DEFAULT_SIZE[element];
}

export const getSizeClasses = ({ size, styles, element }: getSizeClassesProps): string[] => {
	const desktopSize = resolveTextSize({ input: size, element, mode: 'desktop' });
	const mobileSize = typeof size === 'object' && size.mobile
		? resolveTextSize({ input: size, element, mode: 'mobile' })
		: null;

	const classes = [styles[desktopSize]];

	if (mobileSize && styles[`sm-${mobileSize}`]) {
		classes.push(styles[`sm-${mobileSize}`]);
	}

	return classes;
};