import { Telegram } from '@features/Messenger';
import type { ICase } from '../../../model/types/SectionCases.types';
import { CircularProgress } from '@shared/ui/CircularProgress';

type CasesSlideProps = {
	className?: string;
	currentCase: ICase;
};

const CasesSlide = (props: CasesSlideProps) => {
	const { className, currentCase: { id, header, messages } } = props;

	return (
		<Telegram
			key={id}
			header={header}
			messages={messages}
			className={className}
		>
			TELEGRAM
			<CircularProgress value={40} />
		</Telegram>
	);
};

export { CasesSlide };