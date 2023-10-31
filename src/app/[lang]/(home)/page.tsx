"use client"
import { useTranslations } from "next-intl";

export default function Home({ params }: { params: any }) {
  const t = useTranslations('greetings');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-7xl font-semibold">{t('hi')}</h1>
    </main>
  )
}
