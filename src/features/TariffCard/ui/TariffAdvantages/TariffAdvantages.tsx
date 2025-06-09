import { FlexH, FlexV } from '@shared/ui/Stack';
import { Icon } from '@shared/ui/Icon';
import styles from './TariffAdvantages.module.scss';
import CheckIcon from '@shared/assets/icons/check.svg';

type TariffAdvantagesProps = {
	className?: string;
	advantages: string[];
};

const TariffAdvantages = ({ className, advantages }: TariffAdvantagesProps) => (
	<FlexV
		as={'ul'}
		align={'stretch'}
		justify={'stretch'}
		gap={'12'}
		className={className}
	>
		{advantages.map((advantage) => (
			<FlexH
				key={advantage}
				as={'li'}
				align={'start'}
				justify={'stretch'}
				gap={'8'}
				className={styles.advantages__item}
			>
				<span className={styles.advantages__icon}>
					<Icon icon={<CheckIcon />} size={'12'} />
				</span>
				{advantage}
			</FlexH>
		))}
	</FlexV>
);

export { TariffAdvantages };