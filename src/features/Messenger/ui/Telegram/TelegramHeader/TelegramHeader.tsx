import { classNames } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Text } from '@shared/ui/Text';
import { Avatar } from '@shared/ui/Avatar';
import type { TelegramHeader } from '@entities/Telegram';
import styles from './TelegramHeader.module.scss';
import StatusIcon from '@shared/assets/icons/telegram_statusbar.svg';

interface TelegramHeaderProps extends TelegramHeader {
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
				<Avatar
					avatar={icon}
					size={44}
					iconSize={'30'}
					className={classNames(styles.header__avatar, {}, [styles[iconBg]])}
				/>
				<Text
					title={title.toUpperCase()}
					text={desc.toUpperCase()}
					fontFamily={'montserrat'}
					color={{ title: 'dark', text: 'dark-secondary' }}
					size={{ title: 'm', text: 's' }}
					align={'center'}
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