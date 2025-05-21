import type { ReactNode } from 'react';
import { Footer } from '@widgets/Footer';

interface IPagesLayout {
	children: ReactNode;
}

const PagesLayout = ({ children }: IPagesLayout) => (
	<>
		{children}
		<Footer />
	</>
);

export default PagesLayout;
