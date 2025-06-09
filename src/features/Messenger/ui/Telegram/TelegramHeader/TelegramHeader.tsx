import { classNames } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Text } from '@shared/ui/Text';
import { Avatar } from '@shared/ui/Avatar';
import type { TelegramHeader } from '@entities/Telegram';
import styles from './TelegramHeader.module.scss';
import StatusIcon from '@shared/assets/icons/telegram_statusbar.svg';
import StatusMobileIcon from '@shared/assets/icons/telegram_statusbar_mobile.svg';

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
			gap={'10'}
			className={classNames(styles.header, {}, [className])}
		>
			<p className={styles.header__time}>{time}</p>
			<FlexH align={'center'} className={styles.header__row}>
				<Avatar
					avatar={icon}
					iconSize={'fill'}
					className={classNames(styles.header__avatar, {}, [styles[iconBg]])}
				/>
				<Text
					title={title.toUpperCase()}
					text={desc.toUpperCase()}
					fontFamily={'montserrat'}
					color={{ title: 'dark', text: 'dark-secondary' }}
					size={{
						desktop: { title: 'm', text: 's' },
						mobile: { title: 's', text: 'xs' },
					}}
					align={'center'}
					gap={'0'}
				/>
			</FlexH>
			<span className={styles.header__status}>
				<StatusIcon className={classNames(styles.icon, {}, [styles.pc])} />
				<StatusMobileIcon className={classNames(styles.icon, {}, [styles.mobile])} />
			</span>
		</FlexH>
	);
};

export { TelegramHeader };