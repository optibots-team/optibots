import type { ReactNode } from 'react';
import { FlexV, type FlexAlign } from '@shared/ui/Stack';
import { Badge, type IBadgeBackground, type IBadgeSize } from '@shared/ui/Badge';
import { Text, type TextColorProps, TextAlign, TextColor, TextSize } from '@shared/ui/Text';
import { IconSize } from '@shared/ui/Icon';
import type { TitleAlign } from '../model/types/SectionTitle.types';

type SectionTitleProps = {
	className?: string;
	badge?: {
		bordered?: boolean;
		size?: IBadgeSize;
		background?: IBadgeBackground;
		icon?: ReactNode;
		iconSize?: IconSize;
		text?: string;
		textSize?: TextSize;
		textColor?: TextColor;
	}
	text?: {
		title?: string | ReactNode;
		text?: string | ReactNode;
		color?: TextColorProps;
	}
	align?: TitleAlign;
};

const SectionTitle = (props: SectionTitleProps) => {
	const { className, badge, text, align = 'left' } = props;

	const alignMap: Record<TitleAlign, { flex: FlexAlign, text: TextAlign }> = {
		left: {
			flex: 'start',
			text: TextAlign.LEFT,
		},
		center: {
			flex: 'center',
			text: TextAlign.CENTER,
		},
		right: {
			flex: 'end',
			text: TextAlign.RIGHT,
		},
	};

	return (
		<FlexV gap={'24'} className={className} align={alignMap[align].flex}>
			{(badge?.icon || badge?.text) && <Badge {...badge} />}
			<Text gap={'24'} align={alignMap[align].text} {...text} />
		</FlexV>
	);
};

export default SectionTitle;