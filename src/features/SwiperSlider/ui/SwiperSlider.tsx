'use client';

import type { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css';

type SwiperSliderProps = {
	className?: string;
	slideClassName?: string;
	options?: SwiperOptions;
	slides: ReactNode[];
};

const SwiperSlider = (props: SwiperSliderProps) => {
	const { className, slideClassName, options, slides } = props;

	return (
		<Swiper className={className} {...options}>
			{slides.map((slide, i) => (
				<SwiperSlide key={i} className={slideClassName}>{slide}</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperSlider;