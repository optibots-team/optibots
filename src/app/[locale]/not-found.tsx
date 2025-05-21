import { Button } from '@shared/ui/Button';
import { Link } from '@shared/config/i18n/navigation';
import { Routes } from '@shared/config/navigation/routes';

const NotFound = () => (
	<div className={'not-found-page'}>
		<h1>Page not found</h1>
		<Button as={Link} href={Routes.HOME}>Home page</Button>
	</div>
);

export default NotFound;