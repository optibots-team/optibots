import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { RobotScene } from '@features/RobotScene';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {
	return (
		<section className={classNames(styles.intro, {}, [className])}>
			<div className={styles.intro__anim}>
				<RobotScene />
			</div>
		</section>
	);
};

export { SectionIntro };