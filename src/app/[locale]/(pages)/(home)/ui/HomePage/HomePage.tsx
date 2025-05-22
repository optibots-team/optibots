import { RobotLayer } from '@widgets/RobotLayer';
import { Header } from '@widgets/Header';
import { SectionIntro } from '../SectionIntro/SectionIntro';
import { SectionMarquee } from '../SectionMarquee/SectionMarquee';
import { SectionAbout } from '../SectionAbout/SectionAbout';
import { SectionAdvantages } from '../SectionAdvantages/SectionAdvantages/SectionAdvantages';

const HomePage = () => (
	<>
		<RobotLayer>
			<Header />
			<SectionIntro />
		</RobotLayer>
		<SectionMarquee />
		<SectionAbout />
		<SectionAdvantages />
	</>
);

export default HomePage;