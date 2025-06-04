import { useTranslations } from 'next-intl';
import { FlexV, type StackAlign } from '@shared/ui/Stack';
import { Text, type TextColorTheme } from '@shared/ui/Text';
import { Button } from '@shared/ui/Button';
import type { Align } from '@shared/types/layout.types';
import type { SizeToken } from '@shared/types/sizes.types';

type CTAProps = {
	className?: string;
	text?: string;
	textColor?: TextColorTheme;
	btnLabel?: string;
	align?: Align;
	gap?: SizeToken;
};

const CTA = (props: CTAProps) => {
	const { className, text, textColor = 'white', btnLabel, align = 'left', gap = '24' } = props;
	const tButtons = useTranslations('buttons');

	const label = btnLabel || tButtons('order bot').toUpperCase();

	const flexAlign: Record<Align, StackAlign> = {
		left: 'start',
		center: 'center',
		right: 'end',
	};

	return (
		<FlexV
			align={flexAlign[align]}
			justify={'center'}
			gap={gap}
			className={className}
		>
			<Text
				text={text}
				size={'m'}
				align={align}
				color={textColor}
			/>
			<Button theme={'green-gradient'} fontFamily={'unbounded'} className={'fw-500'}>
				{label}
			</Button>
		</FlexV>
	);
};

export default CTA;