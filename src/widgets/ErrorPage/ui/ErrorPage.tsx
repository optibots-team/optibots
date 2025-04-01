import { Button } from '@shared/ui/Button';

const ErrorPage = () => {

	const reloadPage = () => {
		location.reload();
	};

	return (
		<section className={'not-found-page'}>
			<h1>Oops, something&#39;s wrong!</h1>
			<Button onClick={reloadPage} text={'Refresh'} />
		</section>
	);
};

export { ErrorPage };
