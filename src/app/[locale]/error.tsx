'use client';

import { useTranslations } from 'next-intl';
import { FlexV } from '@shared/ui/Stack';
import { Text, TextAlign, TextSize } from '@shared/ui/Text';
import { Button } from '@shared/ui/Button';

const Error = ({ reset }: { reset: () => void }) => {
	const tErrors = useTranslations('errors');
	const tButtons = useTranslations('buttons');

	return (
		<FlexV as={'section'} align={'center'} justify={'center'} gap={'20'} grow>
			<Text
				titleTag={'h1'}
				align={TextAlign.CENTER}
				size={TextSize.XXL}
				title={tErrors('something\'s wrong')}
			/>
			<Button onClick={reset}>
				{tButtons('refresh')}
			</Button>
		</FlexV>
	);
};

export default Error;