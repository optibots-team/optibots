import type { StaticImageData } from 'next/image';

export interface IMarqueeCard {
	title: string;
	description?: string;
	image?: StaticImageData;
}