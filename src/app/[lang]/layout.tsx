import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode, params: any
}) {
  let dictionary;
  try {
    dictionary = (await import(`../../../dictionaries/${params.lang}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.lang} messages={dictionary}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
