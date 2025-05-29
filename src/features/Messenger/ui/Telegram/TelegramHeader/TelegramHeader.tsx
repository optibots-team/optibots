import { classNames } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Text, TextAlign, TextColor, TextSize } from '@shared/ui/Text';
import { Icon, IconSize } from '@shared/ui/Icon';
import type { ITelegramHeader } from '../../../model/types/Telegram.types';
import styles from './TelegramHeader.module.scss';
import StatusIcon from '@shared/assets/icons/telegram_statusbar.svg';

interface TelegramHeaderProps extends ITelegramHeader {
	className?: string;
}

const TelegramHeader = (props: TelegramHeaderProps) => {
	const { className, time = '09:41', chanel: { icon, iconBg, title, desc } } = props;

	return (
		<FlexH
			as={'header'}
			align={'start'}
			justify={'between'}
			gap={'12'}
			className={classNames(styles.header, {}, [className])}
		>
			<p className={styles.header__time}>{time}</p>
			<FlexH align={'center'} gap={'12'}>
				<span className={classNames(styles.header__avatar, {}, [styles[iconBg]])}>
					<Icon icon={icon} size={IconSize.SIZE_30} />
				</span>
				<Text
					title={title.toUpperCase()}
					text={desc.toUpperCase()}
					fontFamily={'montserrat'}
					color={{ title: TextColor.DARK, text: TextColor.DARK_SECONDARY }}
					size={{ title: TextSize.M, text: TextSize.S }}
					align={TextAlign.CENTER}
					gap={'0'}
				/>
			</FlexH>
			<span className={styles.header__status}>
				<StatusIcon />
			</span>
		</FlexH>
	);
};

export { TelegramHeader };