import type { StaticImageData } from 'next/image';

export const isStaticImageData = (value: unknown): value is StaticImageData =>
	typeof value === 'object' && value !== null && 'src' in value;