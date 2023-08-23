import useLocale from '@/hooks/useLocale'
import Layout from '@/components/common/layouts/Layout'

function Setting() {
  const { t } = useLocale()

  return (
    <Layout type="normal" title={t.setting.title}>
      <div className="pt-12">a</div>
    </Layout>
  )
}

export default Setting
