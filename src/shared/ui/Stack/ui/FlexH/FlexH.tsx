import type { ElementType } from 'react';
import Flex, { type FlexProps } from '../Flex/Flex';

type FlexHProps<T extends ElementType = 'div'> = FlexProps<T>;

const FlexH = <T extends ElementType = 'div'>(props: FlexHProps<T>) => (
	<Flex {...props} direction={'row'} />
);

export default FlexH;