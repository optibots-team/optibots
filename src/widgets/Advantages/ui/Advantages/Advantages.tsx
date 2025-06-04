import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Grid } from '@shared/ui/Stack';
import { AdvantagesItem } from '../AdvantagesItem/AdvantagesItem';
import { generateAdvantages } from '../../model/data/advantages.data';
import styles from './Advantages.module.scss';

type AdvantagesProps = {
	className?: string;
};

const Advantages = ({ className }: AdvantagesProps) => {
	const t = useTranslations('advantages');

	const advantages = useMemo(() => generateAdvantages(t), [t]);

	return (
		<Grid as={'ul'} gap={'24'} className={classNames(styles.advantages, {}, [className])}>
			{advantages.map((advantage) => (
				<AdvantagesItem key={advantage.id} advantage={advantage} />
			))}
		</Grid>
	);
};

export default Advantages;