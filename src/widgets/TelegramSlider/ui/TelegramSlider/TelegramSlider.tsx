import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { SwiperSlider } from '@features/SwiperSlider';
import { TelegramSlide } from '../TelegramSlide/TelegramSlide';
import { generateCases } from '../../model/data/telegramSlider.data';
import styles from './TelegramSlider.module.scss';

type TelegramSliderProps = {
	className?: string;
};

const TelegramSlider = ({ className }: TelegramSliderProps) => {
	const t = useTranslations('cases');
	const cases = useMemo(() => generateCases(t), [t]);
	const slides = useMemo(
		() => cases.map((c) => <TelegramSlide key={c.id} currentCase={c} />),
		[cases],
	);

	return (
		<div className={classNames(styles.slider, {}, [className])}>
			<SwiperSlider
				slideClassName={styles.slider__slide}
				slides={slides}
				options={{
					slidesPerView: 'auto',
					spaceBetween: 24,
					centeredSlides: true,
					grabCursor: true,
				}}
			/>
		</div>
	);
};

export default TelegramSlider;