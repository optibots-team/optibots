import { Telegram } from '@features/Messenger';
import { ResultSlider } from '../ResultSlider/ResultSlider';
import type { Case } from '@entities/Case';

type CasesSlideProps = {
	className?: string;
	currentCase: Case;
};

const CasesSlide = (props: CasesSlideProps) => {
	const {
		className,
		currentCase: { internalSlider, externalSlider: { header, messages } },
	} = props;

	return (
		<Telegram header={header} messages={messages} className={className}>
			<ResultSlider sliderData={internalSlider} />
		</Telegram>
	);
};

export { CasesSlide };