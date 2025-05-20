export type TextElement = 'title' | 'text';

export enum TextColor {
	PRIMARY = 'color-primary',
	SECONDARY = 'color-secondary',
	PRIMARY_INVERTED = 'color-primary-inverted',
	SECONDARY_INVERTED = 'color-secondary-inverted',
	RED_LIGHT = 'color-red-light',
	RED_DARK = 'color-red-dark',
}

export enum TextSize {
	S = 'size-s',
	M = 'size-m',
	L = 'size-l',
	XL = 'size-xl',
}

export enum TextAlign {
	LEFT = 'align-left',
	CENTER = 'align-center',
	RIGHT = 'align-right',
}

export type TextTitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';