'use client';

import { useCallback } from 'react';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';
import ArrowIcon from '@shared/assets/icons/arrow-to-top.svg';

type ButtonToTopProps = {
	className?: string;
};

const ButtonToTop = ({ className }: ButtonToTopProps) => {

	const handleClick = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<Button
			className={className}
			theme={'white'}
			size={'s'}
			onClick={handleClick}
			aria-label={'To top button'}
		>
			<Icon icon={<ArrowIcon />} size={'24'} />
		</Button>
	);
};

export default ButtonToTop;