import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { AdvantagesListItem } from '../AdvantagesListItem/AdvantagesListItem';
import { generateAdvantages } from '../../../model/data/sectionAdvantages.data';
import styles from './AdvantagesList.module.scss';

type AdvantagesListProps = {
	className?: string;
};

const AdvantagesList = ({ className }: AdvantagesListProps) => {
	const t = useTranslations('homePage.sectionAdvantages.advantages');

	const advantages = useMemo(() => generateAdvantages(t), [t]);

	return (
		<ul className={classNames(styles.list, {}, [className])}>
			{advantages.map((advantage) => (
				<AdvantagesListItem key={advantage.id} advantage={advantage} />
			))}
		</ul>
	);
};

export { AdvantagesList };