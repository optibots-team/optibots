import createMiddleware from 'next-intl/middleware';
import { routing } from '@shared/config/i18n/routing';

export default createMiddleware(routing);

export const config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};