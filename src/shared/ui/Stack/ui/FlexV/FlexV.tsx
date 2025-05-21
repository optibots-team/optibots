import Flex, { type FlexProps } from '../Flex/Flex';
import type { ElementType } from 'react';

type FlexVProps<T extends ElementType = 'div'> = FlexProps<T>;

const FlexV = <T extends ElementType = 'div'>(props: FlexVProps<T>) => (
	<Flex {...props} direction={'column'} />
);

export default FlexV;