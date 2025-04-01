import { Button, ButtonType } from '@shared/ui/Button';

const NotFound = () => (
	<div className={'not-found-page'}>
		<h1>Page not found</h1>
		<Button as={ButtonType.LINK}>Home page</Button>
	</div>
);

export default NotFound;