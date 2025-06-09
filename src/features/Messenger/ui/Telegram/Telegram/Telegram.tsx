import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { FlexV } from '@shared/ui/Stack';
import { MessengerBase } from '../../MessengerBase/MessengerBase';
import { TelegramHeader } from '../TelegramHeader/TelegramHeader';
import { TelegramContent } from '../TelegramContent/TelegramContent';
import type { TelegramHeader as ITelegramHeader, TelegramMessages as ITelegramMessages } from '@entities/Telegram';
import styles from './Telegram.module.scss';

type TelegramProps = {
	className?: string;
	children: ReactNode;
	header: ITelegramHeader;
	messages: ITelegramMessages;
};

const Telegram = (props: TelegramProps) => {
	const { className, children, header, messages } = props;
	const t = useTranslations('other');

	return (
		<MessengerBase className={classNames(styles.telegram, {}, [className])}>
			<TelegramHeader {...header} />
			<TelegramContent {...messages} />
			<FlexV align={'stretch'} justify={'stretch'} className={styles.telegram__inner}>
				<span className={styles.telegram__badge}>{t('result')}</span>
				{children}
			</FlexV>
		</MessengerBase>
	);
};

export default Telegram;