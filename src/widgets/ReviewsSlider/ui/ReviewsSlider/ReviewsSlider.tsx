'use client';

import { useCallback, useMemo, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as ISwiper } from 'swiper/types';
import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { SwiperSlider } from '@features/SwiperSlider';
import { SliderNavigation } from '../SliderNavigation/SliderNavigation';
import { SliderPagination } from '../SliderPagination/SliderPagination';
import { ReviewsSlide } from '../ReviewsSlide/ReviewsSlide';
import { generateReviews } from '../../model/data/reviewsSlider.data';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './ReviewsSlider.module.scss';

type ReviewsSliderProps = {
	className?: string;
};

const ReviewsSlider = ({ className }: ReviewsSliderProps) => {
	const t = useTranslations('reviews');
	const prevBtnRef = useRef<HTMLButtonElement>(null);
	const nextBtnRef = useRef<HTMLButtonElement>(null);
	const paginationRef = useRef<HTMLDivElement>(null);
	const reviews = useMemo(() => generateReviews(t), [t]);
	const slides = useMemo(() =>
		reviews.map((review) => <ReviewsSlide key={review.id} review={review} />),
		[reviews],
	);

	const setupSwiperRefs = useCallback((swiper: ISwiper) => {
		const nav = swiper.params.navigation;
		const pag = swiper.params.pagination;

		const isNav = nav && typeof nav !== 'boolean';
		const isPag = pag && typeof pag !== 'boolean';

		if (isNav && prevBtnRef.current && nextBtnRef.current) {
			nav.prevEl = prevBtnRef.current;
			nav.nextEl = nextBtnRef.current;
			swiper.navigation.update();
		}

		if (isPag && paginationRef.current) {
			pag.el = paginationRef.current;
			swiper.pagination.update();
		}
	}, []);

	return (
		<FlexV
			align={'stretch'}
			justify={'stretch'}
			gap={'16'}
			className={classNames(styles.slider, {}, [className])}
		>
			<FlexH align={'center'} justify={'between'} gap={'12'}>
				<SliderPagination ref={paginationRef} />
				<SliderNavigation prevBtnRef={prevBtnRef} nextBtnRef={nextBtnRef} />
			</FlexH>
			<div>
				<SwiperSlider
					className={styles.slider__swiper}
					slideClassName={styles.slider__slide}
					slides={slides}
					onBeforeInit={(swiper) => setupSwiperRefs(swiper)}
					options={{
						modules: [Navigation, Pagination],
						slidesPerView: 2,
						slidesPerGroup: 2,
						spaceBetween: 24,
						grabCursor: true,
						pagination: {
							enabled: true,
							type: 'fraction',
							el: paginationRef.current,
							renderFraction: (currentClass, totalClass) =>
								`<span class="${currentClass}"></span> <span>//</span> <span class="${totalClass}"></span>`,
						},
						navigation: {
							enabled: true,
							prevEl: prevBtnRef.current,
							nextEl: nextBtnRef.current,
						},
					}}
				/>
			</div>
		</FlexV>
	);
};

export default ReviewsSlider;