import { useTranslations } from 'next-intl';
import { FlexV } from '@shared/ui/Stack';
import { Text } from '@shared/ui/Text';
import { Button } from '@shared/ui/Button';
import { Link } from '@shared/config/i18n/navigation';
import { Routes } from '@shared/config/navigation/routes';

const NotFoundPage = () => {
	const tErrors = useTranslations('errors');
	const tNavigation = useTranslations('navigation');

	return (
		<FlexV as={'section'} align={'center'} justify={'center'} gap={'20'} grow>
			<Text
				titleTag={'h1'}
				align={'center'}
				size={'xxl'}
				title={tErrors('page not found')}
			/>
			<Button as={Link} href={Routes.HOME}>{tNavigation('home')}</Button>
		</FlexV>
	);
};

export default NotFoundPage;