import { classNames } from '@shared/lib/classNames';
import styles from './CasesSlider.module.scss';

type CasesSliderProps = {
	className?: string;
};

const CasesSlider = ({ className }: CasesSliderProps) => {
	return (
		<div className={classNames(styles.slider, {}, [className])}>
			SLIDER
		</div>
	);
};

export { CasesSlider };