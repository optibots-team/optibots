import type { RefObject } from 'react';
import { FlexH } from '@shared/ui/Stack';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
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
			theme={ButtonTheme.BLACK}
			size={ButtonSize.CUSTOM}
		>
			<Icon icon={<LeftArrowIcon />} size={IconSize.SIZE_24} />
		</Button>
		<Button
			btnRef={nextBtnRef}
			className={styles.navigation__btn}
			theme={ButtonTheme.BLACK}
			size={ButtonSize.CUSTOM}
		>
			<Icon icon={<RightArrowIcon />} size={IconSize.SIZE_24} />
		</Button>
	</FlexH>
);

export { SliderNavigation };