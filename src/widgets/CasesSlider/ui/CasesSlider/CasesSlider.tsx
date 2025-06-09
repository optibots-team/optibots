import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { SwiperSlider } from '@features/SwiperSlider';
import { CasesSlide } from '../CasesSlide/CasesSlide';
import { generateCases } from '../../model/data/casesSlider.data';
import styles from './CasesSlider.module.scss';

type CasesSliderProps = {
	className?: string;
};

const CasesSlider = ({ className }: CasesSliderProps) => {
	const t = useTranslations('cases');
	const cases = useMemo(() => generateCases(t), [t]);

	const slides = useMemo(
		() => cases.map((c) => <CasesSlide key={c.id} currentCase={c} />),
		[cases],
	);

	return (
		<div className={classNames(styles.slider, {}, [className])}>
			<SwiperSlider
				slideClassName={styles.slider__slide}
				slides={slides}
				options={{
					slidesPerView: 'auto',
					spaceBetween: 6,
					centeredSlides: true,
					grabCursor: true,
					initialSlide: 1,
					breakpoints: {
						374: {
							spaceBetween: 12,
						},
						767: {
							spaceBetween: 24,
						},
					},
				}}
			/>
		</div>
	);
};

export default CasesSlider;