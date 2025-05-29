import { Telegram } from '@features/Messenger';
import { ResultSlider } from '../ResultSlider/ResultSlider';
import type { ICase } from '../../model/types/TelegramSlider.types';

type TelegramSlideProps = {
	className?: string;
	currentCase: ICase;
};

const TelegramSlide = (props: TelegramSlideProps) => {
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

export { TelegramSlide };