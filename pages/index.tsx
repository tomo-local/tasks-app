import useLocale from '@/hooks/useLocale'

export default function Home() {
  const { t } = useLocale()

  return <div>{t.home}</div>
}
