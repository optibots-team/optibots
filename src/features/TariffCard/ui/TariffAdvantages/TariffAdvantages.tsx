import { classNames } from '@shared/lib/classNames';
import { Icon } from '@shared/ui/Icon';
import styles from './TariffAdvantages.module.scss';
import CheckIcon from '@shared/assets/icons/check.svg';

type TariffAdvantagesProps = {
	className?: string;
	advantages: string[];
};

const TariffAdvantages = ({ className, advantages }: TariffAdvantagesProps) => (
	<ul className={classNames(styles.advantages, {}, [className])}>
		{advantages.map((advantage) => (
			<li key={advantage} className={styles.advantages__item}>
				<span className={styles.advantages__icon}>
					<Icon icon={<CheckIcon />} size={'12'} />
				</span>
				{advantage}
			</li>
		))}
	</ul>
);

export { TariffAdvantages };