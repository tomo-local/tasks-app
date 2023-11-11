import Layout from '@/components/common/layouts/Layout'
import SettingLayout from '@/components/settings/SettingLayout'
import SettingBase from '@/components/settings/SettingBase'

import useLocale from '@/hooks/useLocale'

function Account() {
  const { t } = useLocale()

  return (
    <Layout type="normal" title={t.page.setting.account}>
      <div className="h-screen pt-12">
        <SettingLayout>
          <SettingBase title={t.page.setting.account}>index</SettingBase>
        </SettingLayout>
      </div>
    </Layout>
  )
}

export default Account
