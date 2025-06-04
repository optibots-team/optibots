import { forwardRef } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './SliderPagination.module.scss';

type SliderPaginationProps = {
	className?: string;
};

const SliderPagination = forwardRef<HTMLDivElement, SliderPaginationProps>
(({ className }, ref) => (
	<div ref={ref} className={classNames(styles.pagination, {}, [className])} />
));

SliderPagination.displayName = 'SliderPagination';

export { SliderPagination };