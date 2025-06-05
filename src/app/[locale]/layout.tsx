import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Unbounded, Montserrat } from 'next/font/google';
import type { ReactNode } from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@globals/providers/ErrorBoundary';
import { routing } from '@shared/config/i18n/routing';
import '@globals/styles/index.scss';

const unbounded = Unbounded({
	variable: '--font-unbounded',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Optibots',
	description: 'Developed by Vlad Poliakov',
	// icons: {
	// 	icon: '/favicon.ico',
	// 	apple: '/apple-touch-icon.png',
	// },
};

interface RootLayoutProps {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
		<body className={`${montserrat.variable} ${unbounded.variable}`}>
		<NextIntlClientProvider>
			<ErrorBoundary>
				{children}
			</ErrorBoundary>
			<ToastContainer theme={'light'} />
		</NextIntlClientProvider>
		</body>
		</html>
	);
};

export default RootLayout;
