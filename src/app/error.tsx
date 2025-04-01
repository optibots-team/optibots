'use client';

import { Button } from '@shared/ui/Button';

const Error = ({ reset }: { reset: () => void }) => (
	<div className={'not-found-page'}>
		<h1>Oops, something&#39;s wrong!</h1>
		<Button onClick={reset} text={'Refresh the page'} />
	</div>
);

export default Error;