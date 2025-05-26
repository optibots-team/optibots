import { classNames } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Icon, IconSize } from '@shared/ui/Icon';
import { socials } from '../model/data/socials.data';
import styles from './Socials.module.scss';

type SocialsProps = {
	className?: string;
};

const Socials = ({ className }: SocialsProps) => (
	<FlexH as={'ul'} gap={'16'} className={classNames(styles.socials, {}, [className])}>
		{socials.map(({ name, icon, url }) => (
			<li key={name} className={styles.socials__item}>
				<a href={url} target={'_blank'} className={styles.socials__link}>
					<Icon icon={icon} size={IconSize.SIZE_24} />
				</a>
			</li>
		))}
	</FlexH>
);

export default Socials;