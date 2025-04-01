import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Poppins, Roboto } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@globals/providers/ErrorBoundary';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import '@globals/styles/index.scss';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
	title: 'Optibots',
	description: 'Developed by Vlad Poliakov',
	// icons: {
	// 	icon: '/favicon.ico',
	// 	apple: '/apple-touch-icon.png',
	// },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang={'en'}>
	<body className={`${poppins.variable} ${roboto.variable}`}>
	<ErrorBoundary>
		<Header />
		<main className={'main'}>{children}</main>
		<Footer />
	</ErrorBoundary>
	<ToastContainer theme={'light'} />
	</body>
	</html>
);

export default RootLayout;
