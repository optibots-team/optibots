import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import type { IReview } from '../../model/types/ReviewsSlider.types';
import styles from './ReviewsSlide.module.scss';

type ReviewsSlideProps = {
	className?: string;
	review: IReview;
};

const ReviewsSlide = (props: ReviewsSlideProps) => {
	const { className, review: { author, job, company, comment } } = props;

	return (
		<FlexV gap={'20'} className={classNames(styles.slide, {}, [className])}>
			<FlexH align={'center'} gap={'12'}>
				<span className={styles.slide__avatar}>{author[0]}</span>
				<Text
					className={styles.slide__author}
					gap={'4'}
					title={`${author}, ${job}`}
					text={company.toUpperCase()}
					titleTag={'p'}
					size={TextSize.M}
					color={{ title: TextColor.DARK_SECONDARY }}
					fontFamily={{ title: 'montserrat', text: 'unbounded' }}
				/>
			</FlexH>
			<Text text={comment} color={TextColor.DARK_SECONDARY} />
		</FlexV>
	);
};

export { ReviewsSlide };