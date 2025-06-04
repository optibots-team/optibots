export type TextElement = 'title' | 'text';

export enum TextColor {
	WHITE = 'color-white',
	BLACK = 'color-black',
	DARK = 'color-dark',
	DARK_SECONDARY = 'color-dark-secondary',
	LIGHT = 'color-light',
	GREEN_GRADIENT= 'color-green-gradient',
}

export enum TextSize {
	XS = 'size-xs',
	S = 'size-s',
	M = 'size-m',
	ML = 'size-ml',
	L = 'size-l',
	XL = 'size-xl',
	XXL = 'size-xxl',
}

export enum TextAlign {
	LEFT = 'align-left',
	CENTER = 'align-center',
	RIGHT = 'align-right',
}

export type TextTitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';