'use client';

import { useMemo } from 'react';
import { Pagination } from 'swiper/modules';
import { classNames } from '@shared/lib/classNames';
import { SwiperSlider } from '@features/SwiperSlider';
import { ResultSlide } from '../ResultSlide/ResultSlide';
import type { IInternalSlider } from '../../model/types/TelegramSlider.types';
import type { ResultSlideTheme } from '../../model/types/ResultSlider.types';
import 'swiper/css/pagination';
import './ResultSlider.scss';
import styles from './ResultSlider.module.scss';

type ResultSliderProps = {
	className?: string;
	sliderData: IInternalSlider;
};

const ResultSlider = ({ className, sliderData }: ResultSliderProps) => {
	const slides = useMemo(() =>
		(['progress', 'result'] as const).map((key) => {
			const theme: ResultSlideTheme = key === 'progress' ? 'double' : 'single';
			const data = sliderData[key];

			return (
				<ResultSlide
					key={key}
					theme={theme}
					data={data}
				/>
			);
		}),
		[sliderData],
	);

	return (
		<div className={classNames('', {}, [className])}>
			<SwiperSlider
				slideClassName={styles.slider__slide}
				slides={slides}
				options={{
					modules: [Pagination],
					pagination: {
						horizontalClass: styles.slider__pagination,
					},
					slidesPerView: 1,
					spaceBetween: 24,
				}}
			/>
		</div>
	);
};

export { ResultSlider };