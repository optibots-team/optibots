import { SectionIntro } from '../SectionIntro/SectionIntro';
import { Header } from '@widgets/Header';
import { RobotLayer } from '@widgets/RobotLayer';

const HomePage = () => (
	<>
		<RobotLayer>
			<Header />
			<SectionIntro />
		</RobotLayer>
	</>
);

export default HomePage;