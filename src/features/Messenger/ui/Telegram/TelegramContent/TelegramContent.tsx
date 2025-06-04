import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Avatar } from '@shared/ui/Avatar';
import { IconSize } from '@shared/ui/Icon';
import type { ITelegramMessages } from '../../../model/types/Telegram.types';
import styles from './TelegramContent.module.scss';
import LogoIcon from '@shared/assets/icons/logo_small.svg';

interface TelegramContentProps extends ITelegramMessages {
	className?: string;
}

const TelegramContent = (props: TelegramContentProps) => {
	const { className, userMessage, botMessage, steps } = props;

	return (
		<FlexV
			align={'stretch'}
			justify={'stretch'}
			gap={'24'}
			className={classNames(styles.content, {}, [className])}
		>
			<FlexV align={'end'} gap={'8'} className={classNames(styles.content__group, {}, [styles.user])}>
				<div className={styles.content__message}>
					<p className={styles.content__text}>/start</p>
				</div>
				<div className={styles.content__message}>
					<p className={styles.content__text}>{userMessage}</p>
				</div>
			</FlexV>
			<FlexH align={'end'} gap={'14'} className={classNames(styles.content__group, {}, [styles.bot])}>
				<Avatar
					className={styles.content__avatar}
					avatar={<LogoIcon />}
					size={44}
					iconSize={IconSize.SIZE_26}
				/>
				<FlexV gap={'8'} className={styles.content__group}>
					<div className={styles.content__message}>
						<p className={styles.content__text}>{botMessage}</p>
					</div>
					<div className={styles.content__message}>
						<ul>
							{steps.map((step, i) => (
								<li key={i} className={styles.content__text}>
									{step}
								</li>
							))}
						</ul>
					</div>
				</FlexV>
			</FlexH>
		</FlexV>
	);
};

export { TelegramContent };