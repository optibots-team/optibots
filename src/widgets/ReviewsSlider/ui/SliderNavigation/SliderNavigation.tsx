import type { RefObject } from 'react';
import { FlexH } from '@shared/ui/Stack';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';
import styles from './SliderNavigation.module.scss';
import LeftArrowIcon from '@shared/assets/icons/arrow-to-left_2.svg';
import RightArrowIcon from '@shared/assets/icons/arrow-to-right_2.svg';

type SliderNavigationProps = {
	className?: string;
	prevBtnRef: RefObject<HTMLButtonElement | null>;
	nextBtnRef: RefObject<HTMLButtonElement | null>;
};

const SliderNavigation = ({ className, prevBtnRef, nextBtnRef }: SliderNavigationProps) => (
	<FlexH
		align={'center'}
		justify={'center'}
		gap={'16'}
		className={className}
	>
		<Button
			btnRef={prevBtnRef}
			className={styles.navigation__btn}
			theme={'dark'}
			size={'custom'}
			aria-label={'prev slide button'}
		>
			<Icon icon={<LeftArrowIcon />} size={'24'} />
		</Button>
		<Button
			btnRef={nextBtnRef}
			className={styles.navigation__btn}
			theme={'dark'}
			size={'custom'}
			aria-label={'next slide button'}
		>
			<Icon icon={<RightArrowIcon />} size={'24'} />
		</Button>
	</FlexH>
);

export { SliderNavigation };