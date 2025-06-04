import type { ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Icon } from '@shared/ui/Icon';
import { Text } from '@shared/ui/Text';
import { CircularProgress } from '@shared/ui/CircularProgress';
import type { InternalProgress, InternalSlideTheme } from '@entities/Case';
import styles from './ResultSlide.module.scss';
import CheckIcon from '@shared/assets/icons/check.svg';

type ResultSlideProps = {
	className?: string;
	theme: InternalSlideTheme;
	data: InternalProgress[] | string[];
};

const ResultSlide = ({ className, theme, data }: ResultSlideProps) => {
	const content: Record<InternalSlideTheme, () => ReactNode> = {
		single: () => (
			<FlexV as={'ul'} gap={'8'} className={styles.result}>
				{(data as string[]).map((item) => (
					<FlexH as={'li'} gap={'8'} align={'start'} key={item}>
						<span className={styles.result__icon}>
							<Icon icon={<CheckIcon />} size={'14'} />
						</span>
						<Text
							text={item.toUpperCase()}
							fontFamily={'montserrat'}
							size={'s'}
							color={'dark-secondary'}
						/>
					</FlexH>
				))}
			</FlexV>
		),
		double: () => (
			<FlexH as={'ul'} align={'stretch'} justify={'stretch'} gap={'16'}>
				{(data as InternalProgress[]).map(({ title, progress }) => (
					<FlexV as={'li'} gap={'8'} key={title} className={styles.progress__item}>
						<Text
							text={title.toUpperCase()}
							fontFamily={'montserrat'}
							size={'s'}
							color={'dark-secondary'}
						/>
						<CircularProgress value={progress} className={'mt-a m-centred'} />
					</FlexV>
				))}
			</FlexH>
		),
	};

	return (
		<div className={classNames(styles.slide, {}, [className, styles[theme]])}>
			{content[theme]()}
		</div>
	);
};

export { ResultSlide };