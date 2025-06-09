import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Text } from '@shared/ui/Text';
import type { Review } from '@entities/Review';
import styles from './ReviewsSlide.module.scss';

type ReviewsSlideProps = {
	className?: string;
	review: Review;
};

const ReviewsSlide = (props: ReviewsSlideProps) => {
	const { className, review: { author, job, company, comment } } = props;

	return (
		<FlexV gap={'20'} className={classNames(styles.slide, {}, [className])}>
			<FlexH align={'center'} gap={'12'}>
				<span className={styles.slide__avatar}>{author[0]}</span>
				<Text
					gap={'4'}
					title={`${author}, ${job}`}
					text={company.toUpperCase()}
					titleTag={'p'}
					size={'m'}
					color={{ title: 'dark-secondary' }}
					fontFamily={{ title: 'montserrat', text: 'unbounded' }}
					weight={{ title: '400', text: '500' }}
				/>
			</FlexH>
			<Text text={comment} color={'dark-secondary'} />
		</FlexV>
	);
};

export { ReviewsSlide };