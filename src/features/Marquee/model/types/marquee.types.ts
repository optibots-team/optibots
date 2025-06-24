import type { StaticImageData } from 'next/image';

export interface MarqueeCard {
	id: 'reduce' | 'automate' | 'expertise' | 'satisfied' | 'projects' | 'attracted' | 'processed';
	title: string;
	description?: string;
	image?: StaticImageData | string;
	imageSize?: number | string;
}