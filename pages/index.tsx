import useLocale from '@/hooks/useLocale'
import Layout from '@/components/common/layouts/Layout'

export default function Home() {
  const { t } = useLocale()

  return (
    <Layout type="normal" title={t.home.title}>
      <div className='pt-12'>
        a
      </div>
    </Layout>
  )
}
