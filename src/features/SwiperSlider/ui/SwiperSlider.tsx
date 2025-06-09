'use client';

import type { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions, Swiper as ISwiper } from 'swiper/types';
import 'swiper/scss';

type SwiperSliderProps = {
	className?: string;
	slideClassName?: string;
	options?: SwiperOptions;
	onBeforeInit?: (swiper: ISwiper) => void;
	slides: ReactNode[];
};

const SwiperSlider = (props: SwiperSliderProps) => {
	const { className, slideClassName, options, onBeforeInit, slides } = props;

	return (
		<Swiper className={className} onBeforeInit={onBeforeInit} {...options}>
			{slides.map((slide, i) => (
				<SwiperSlide key={i} className={slideClassName}>{slide}</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperSlider;