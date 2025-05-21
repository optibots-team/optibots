import { Flex } from '@shared/ui/Stack';
import { Loader } from '@shared/ui/Loader';

const Loading = () => (
	<Flex
		align={'center'}
		justify={'center'}
		grow
		style={{ paddingTop: '50px', paddingBottom: '50px' }}
	>
		<Loader />
	</Flex>
);

export default Loading;