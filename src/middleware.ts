
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'np'],
    defaultLocale: 'en',
    domains: [
        {
            domain: 'localhost',
            defaultLocale: 'en'
        },
        {
            domain: 'np.localhost',
            defaultLocale: 'np'
        }
    ]
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}

