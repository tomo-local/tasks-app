import { useRouter } from 'next/router'
import en from '@p/locales/en'
import ja from '@p/locales/ja'

function useLocale() {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : ja
  return { locale, t }
}

export default useLocale
