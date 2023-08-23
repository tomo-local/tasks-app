import useLocale from '@/hooks/useLocale'
import Layout from '@/components/common/layouts/Layout'
import SettingLayout from '../../src/components/settings/SettingLayout'
import YourProfile from '../../src/components/settings/profile/YourProfile'

function Profile() {
  const { t } = useLocale()
  return (
    <Layout type="normal" title={t.setting.profile.title}>
      <div className="h-screen pt-12">
        <SettingLayout>
          <YourProfile />
        </SettingLayout>
      </div>
    </Layout>
  )
}

export default Profile
