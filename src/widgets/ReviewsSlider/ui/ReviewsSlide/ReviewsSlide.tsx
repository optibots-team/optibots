import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import type { IReview } from '../../model/types/ReviewsSlider.types';
import styles from './ReviewsSlide.module.scss';

type ReviewsSlideProps = {
	className?: string;
	review: IReview;
};

const ReviewsSlide = (props: ReviewsSlideProps) => {
	const { className, review } = props;

	return (
		<FlexV gap={'24'} className={classNames(styles.slide, {}, [className])}>
			<FlexH gap={'12'}>

			</FlexH>
		</FlexV>
	);
};

export { ReviewsSlide };