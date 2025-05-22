import type { ReactNode } from 'react';
import { FlexV } from '@shared/ui/Stack';
import { Badge } from '@shared/ui/Badge';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import { IconSize } from '@shared/ui/Icon';

type SectionTitleProps = {
	className?: string;
	badgeBordered?: boolean;
	badgeIcon?: ReactNode;
	badgeIconSize?: IconSize;
	badgeText?: string;
	badgeTextSize?: TextSize;
	badgeTextColor?: TextColor;
	title?: string | ReactNode;
	desc?: string | ReactNode;
	textColor?: TextColor;
};

const SectionTitle = (props: SectionTitleProps) => {
	const {
		className,
		badgeBordered,
		badgeIcon,
		badgeIconSize,
		badgeText,
		badgeTextSize,
		badgeTextColor,
		title,
		desc,
		textColor,
	} = props;

	return (
		<FlexV gap={'24'} className={className}>
			{(badgeIcon || badgeText) && (
				<Badge
					bordered={badgeBordered}
					icon={badgeIcon}
					iconSize={badgeIconSize}
					text={badgeText}
					textSize={badgeTextSize}
					textColor={badgeTextColor}
				/>
			)}
			<Text
				gap={'24'}
				title={title}
				text={desc}
				color={textColor}
			/>
		</FlexV>
	);
};

export default SectionTitle;