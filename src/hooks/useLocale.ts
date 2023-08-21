import { useRouter } from 'next/router'
import en from '@public/locales/en'
import ja from '@public/locales/ja'

export default function useLocale() {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : ja
  return { locale, t }
}
