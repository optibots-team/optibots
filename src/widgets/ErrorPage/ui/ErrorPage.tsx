import { useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FlexV } from '@shared/ui/Stack';
import { Text, TextAlign, TextSize } from '@shared/ui/Text';
import { Button } from '@shared/ui/Button';

const ErrorPage = () => {
	const tErrors = useTranslations('errors');
	const tButtons = useTranslations('buttons');

	const reloadPage = useCallback(() => {
		location.reload();
	}, []);

	return (
		<FlexV as={'section'} align={'center'} justify={'center'} gap={'20'} grow>
			<Text
				titleTag={'h1'}
				align={TextAlign.CENTER}
				size={TextSize.XXL}
				title={tErrors('something\'s wrong')}
			/>
			<Button onClick={reloadPage}>{tButtons('refresh')}</Button>
		</FlexV>
	);
};

export { ErrorPage };
