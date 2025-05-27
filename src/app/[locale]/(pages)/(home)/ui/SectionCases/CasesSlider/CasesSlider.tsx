import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Telegram } from '@features/Messenger';
import { generateCases } from '../../../model/data/sectionCases.data';
import styles from './CasesSlider.module.scss';

type CasesSliderProps = {
	className?: string;
};

const CasesSlider = ({ className }: CasesSliderProps) => {
	const t = useTranslations('cases');
	const cases = useMemo(() => generateCases(t), [t]);

	return (
		<div className={classNames(styles.slider, {}, [className])}>
			<Telegram header={cases[0].header} messages={cases[0].messages}>
				TELEGRAMCHIK
			</Telegram>
		</div>
	);
};

export { CasesSlider };