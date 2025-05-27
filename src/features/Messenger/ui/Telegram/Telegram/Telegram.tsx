import type { ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import { MessengerBase } from '../../MessengerBase/MessengerBase';
import { TelegramHeader } from '../TelegramHeader/TelegramHeader';
import { TelegramContent } from '../TelegramContent/TelegramContent';
import type { ITelegramHeader, ITelegramMessages } from '../../../model/types/Telegram.types';
import styles from './Telegram.module.scss';

type TelegramProps = {
	className?: string;
	children: ReactNode;
	header: ITelegramHeader;
	messages: ITelegramMessages;
};

const Telegram = (props: TelegramProps) => {
	const { className, children, header, messages } = props;

	return (
		<MessengerBase className={classNames(styles.telegram, {}, [className])}>
			<TelegramHeader {...header} />
			<TelegramContent {...messages} />
			{children}
		</MessengerBase>
	);
};

export default Telegram;