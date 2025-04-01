import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames(styles.intro, {}, [className])}>
		<Container>
			<h1>Intro</h1>
			<h2>Testing dev</h2>
			<h3>Testing dev2</h3>
		</Container>
	</section>
);

export { SectionIntro };