import Layout from '@/components/common/layouts/Layout'
import SettingLayout from '@/components/settings/SettingLayout'
import SettingBase from '@/components/settings/SettingBase'

import useLocale from '@/hooks/useLocale'

function Notification() {
  const { t } = useLocale()

  return (
    <Layout type="normal" title={t.page.setting.notification}>
      <div className="h-screen pt-12">
        <SettingLayout>
          <SettingBase title={t.page.setting.notification}>index</SettingBase>
        </SettingLayout>
      </div>
    </Layout>
  )
}

export default Notification
