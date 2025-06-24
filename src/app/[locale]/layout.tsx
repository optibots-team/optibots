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
	title: 'Optibots — Chatbots & Sales Funnel Automation',
	description: 'We build smart chatbots and automate sales funnels, marketing, and online business processes using AI technologies.',
	keywords: [
		'chatbots',
		'business automation',
		'sales funnel automation',
		'marketing automation',
		'AI chatbots',
		'artificial intelligence',
		'online business tools',
		'chatbot development',
		'sales bots',
		'process optimization',
	],
	manifest: '/icons/site.webmanifest',
	icons: {
		icon: '/icons/favicon.ico',
		apple: '/icons/apple-touch-icon.png',
	},
	openGraph: {
		title: 'Optibots — Smart chatbots for your business',
		description: 'Optibots helps businesses grow faster by automating marketing, sales funnels, and online workflows with AI.',
		images: [
			{
				url: '/images/ogp.jpg',
				alt: 'Optibots Open Graph Image',
			},
		],
	},
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
