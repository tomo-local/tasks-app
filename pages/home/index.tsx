import useLocale from '@/hooks/useLocale'
import Layout from '@/components/common/layouts/Layout'

function Home() {
  const { t } = useLocale()

  return (
    <Layout type="normal" title={t.page.home}>
      <div className="pt-12">a</div>
    </Layout>
  )
}

export default Home
