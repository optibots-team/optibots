import { RobotLayer } from '@widgets/RobotLayer';
import { Header } from '@widgets/Header';
import { SectionIntro } from '../SectionIntro/SectionIntro';
import { SectionMarquee } from '../SectionMarquee/SectionMarquee';

const HomePage = () => (
	<>
		<RobotLayer>
			<Header />
			<SectionIntro />
		</RobotLayer>
		<SectionMarquee />
	</>
);

export default HomePage;