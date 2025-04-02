import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Poppins, Roboto } from 'next/font/google';
import type { ReactNode } from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@globals/providers/ErrorBoundary';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import { routing } from '@shared/config/i18n/routing';
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

interface IRootLayout {
	children: ReactNode;
	params: Promise<{locale: string}>;
}

const RootLayout = async ({ children, params }: IRootLayout) => {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
		<body className={`${poppins.variable} ${roboto.variable}`}>
		<NextIntlClientProvider>
			<ErrorBoundary>
				<Header />
				<main className={'main'}>{children}</main>
				<Footer />
			</ErrorBoundary>
			<ToastContainer theme={'light'} />
		</NextIntlClientProvider>
		</body>
		</html>
	);
};

export default RootLayout;
