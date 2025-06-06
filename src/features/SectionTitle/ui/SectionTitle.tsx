import type { ReactNode } from 'react';
import { FlexV, type StackAlign } from '@shared/ui/Stack';
import { Badge, type IBadgeBackground } from '@shared/ui/Badge';
import { Text, type TextAlign, type TextSize, type TextColorTheme, type TextColor } from '@shared/ui/Text';
import type { IconSize } from '@shared/ui/Icon';
import type { Align } from '@shared/types/layout.types';
import type { SizePreset } from '@shared/types/sizes.types';

type SectionTitleProps = {
	className?: string;
	badge?: {
		bordered?: boolean;
		size?: SizePreset;
		background?: IBadgeBackground;
		icon?: ReactNode;
		iconSize?: IconSize;
		text?: string;
		textSize?: TextSize;
		textColor?: TextColorTheme;
	}
	text?: {
		title?: string | ReactNode;
		text?: string | ReactNode;
		color?: TextColor;
	}
	align?: Align;
};

const SectionTitle = (props: SectionTitleProps) => {
	const { className, badge, text, align = 'left' } = props;

	const alignMap: Record<Align, { flex: StackAlign, text: TextAlign }> = {
		left: {
			flex: 'start',
			text: 'left',
		},
		center: {
			flex: 'center',
			text: 'center',
		},
		right: {
			flex: 'end',
			text: 'right',
		},
	};

	return (
		<FlexV gap={'24'} className={className} align={alignMap[align].flex}>
			{(badge?.icon || badge?.text) && <Badge {...badge} />}
			<Text
				align={alignMap[align].text}
				gap={'24'}
				size={{
					desktop: { title: 'xl', text: 'm' },
					mobile: { title: 'sl', text: 'm' },
				}}
				{...text}
			/>
		</FlexV>
	);
};

export default SectionTitle;