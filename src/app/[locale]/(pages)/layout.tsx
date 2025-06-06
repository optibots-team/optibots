import type { ReactNode } from 'react';
import { Footer } from '@widgets/Footer';
import { FlexV } from '@shared/ui/Stack';

interface PagesLayoutProps {
	children: ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => (
	<>
		<FlexV as={'main'} align={'stretch'} justify={'stretch'}>
			{children}
		</FlexV>
		<Footer />
	</>
);

export default PagesLayout;
