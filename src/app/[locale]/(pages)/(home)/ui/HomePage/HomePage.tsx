import { RobotLayer } from '@widgets/RobotLayer';
import { Header } from '@widgets/Header';
import { SectionIntro } from '../SectionIntro/SectionIntro';
import { SectionMarquee } from '../SectionMarquee/SectionMarquee';
import { SectionAbout } from '../SectionAbout/SectionAbout';
import { SectionAdvantages } from '../SectionAdvantages/SectionAdvantages/SectionAdvantages';
import { SectionTariffs } from '../SectionTariffs/SectionTariffs/SectionTariffs';
import { SectionCases } from '../SectionCases/SectionCases/SectionCases';

const HomePage = () => (
	<>
		<RobotLayer>
			<Header />
			<SectionIntro />
		</RobotLayer>
		<SectionMarquee />
		<SectionAbout />
		<SectionAdvantages />
		<SectionTariffs />
		<SectionCases />
	</>
);

export default HomePage;