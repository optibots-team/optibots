import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Grid } from '@shared/ui/Stack';
import { PainsItem } from '../PainsItem/PainsItem';
import { generatePainList } from '../../model/data/pains.data';
import styles from './Pains.module.scss';

type PainsProps = {
	className?: string;
};

const Pains = ({ className }: PainsProps) => {
	const t = useTranslations('pain');

	const painsList = useMemo(() => generatePainList(t), [t]);

	return (
		<Grid as={'ul'} gap={'24'} className={classNames(styles.pains, {}, [className])}>
			{painsList.map((pain) => (
				<PainsItem key={pain.id} pain={pain} />
			))}
		</Grid>
	);
};

export default Pains;