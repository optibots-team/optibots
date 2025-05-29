import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { SwiperSlider } from '@features/SwiperSlider';
import { ReviewsSlide } from '../ReviewsSlide/ReviewsSlide';
import { generateReviews } from '../../model/data/reviewsSlider.data';
import styles from './ReviewsSlider.module.scss';

type ReviewsSliderProps = {
	className?: string;
};

const ReviewsSlider = ({ className }: ReviewsSliderProps) => {
	const t = useTranslations('reviews');
	const reviews = useMemo(() => generateReviews(t), [t]);
	const slides = useMemo(() =>
		reviews.map((review) => <ReviewsSlide key={review.id} review={review} />),
		[reviews],
	);

	return (
		<div className={classNames(styles.slider, {}, [className])}>
			<SwiperSlider
				slideClassName={styles.slider__slide}
				slides={slides}
				options={{
					slidesPerView: 2,
					spaceBetween: 24,
					grabCursor: true,
				}}
			/>
		</div>
	);
};

export default ReviewsSlider;