import { RobotLayer } from '@widgets/RobotLayer';
import { Header } from '@widgets/Header';
import { HomeMarquee } from '@widgets/HomeMarquee';
import { SectionIntro } from '../SectionIntro/SectionIntro';
import { SectionAbout } from '../SectionAbout/SectionAbout';
import { SectionAdvantages } from '../SectionAdvantages/SectionAdvantages';
import { SectionTariffs } from '../SectionTariffs/SectionTariffs';
import { SectionCases } from '../SectionCases/SectionCases';
import { SectionReviews } from '../SectionReviews/SectionReviews';
import { SectionPain } from '../SectionPain/SectionPain';
import { SectionFaq } from '../SectionFaq/SectionFaq';
import { SectionContacts } from '../SectionContacts/SectionContacts';

const HomePage = () => (
	<>
		<RobotLayer>
			<Header />
			<SectionIntro />
		</RobotLayer>
		<HomeMarquee />
		<SectionAbout />
		<SectionAdvantages />
		<SectionTariffs />
		<SectionCases />
		<SectionReviews />
		<SectionPain />
		<SectionFaq />
		<SectionContacts />
	</>
);

export default HomePage;