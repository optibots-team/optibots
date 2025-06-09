import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Icon } from '@shared/ui/Icon';
import { Text } from '@shared/ui/Text';
import type { Pain } from '@entities/Pain';
import styles from './PainsItem.module.scss';

type PainsItemProps = {
	className?: string;
	pain: Pain;
};

const PainsItem = (props: PainsItemProps) => {
	const { className, pain: { id, icon, title, desc } } = props;

	return (
		<FlexV
			as={'li'}
			align={'stretch'}
			justify={'stretch'}
			className={classNames(styles.item, {}, [className, styles[id]])}
		>
			<FlexH align={'center'} gap={'12'} className={styles.item__header}>
				<Icon icon={icon} size={'20'} />
				<Text
					className={styles.item__title}
					title={title.toUpperCase()}
					titleTag={'h3'}
					size={'m'}
					color={'white'}
					weight={'500'}
				/>
			</FlexH>
			<Text text={desc} color={'light'} />
		</FlexV>
	);
};

export { PainsItem };