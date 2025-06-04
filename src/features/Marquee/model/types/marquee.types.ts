import type { StaticImageData } from 'next/image';

export interface MarqueeCard {
	title: string;
	description?: string;
	image?: StaticImageData;
}