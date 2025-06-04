import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { ReviewsSlider } from '@widgets/ReviewsSlider';
import styles from './SectionReviews.module.scss';
import LightningIcon from '@shared/assets/icons/lightning_gradient.svg';

type SectionReviewsProps = {
	className?: string;
};

const SectionReviews = ({ className }: SectionReviewsProps) => {
	const t = useTranslations('homePage.sectionReviews');

	return (
		<section className={classNames(styles.reviews, {}, [className, 'section-padding-top'])}>
			<Container display={'flex'} orientation={'vertical'} className={styles.reviews__container}>
				<SectionTitle
					className={styles.reviews__title}
					badge={{
						icon: <LightningIcon />,
						text: t('badge'),
					}}
					text={{
						title: t('sectionTitle').toUpperCase(),
					}}
				/>
				<ReviewsSlider />
			</Container>
		</section>
	);
};

export { SectionReviews };