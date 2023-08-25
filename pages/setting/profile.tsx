import Layout from '@/components/common/layouts/Layout'
import SettingLayout from '@/components/settings/SettingLayout'
import SettingBase from '@/components/settings/SettingBase'
import ProfileForm from '@/components/settings/profile/ProfileForm'
import AvatarForm from '@/components/settings/profile/AvatarForm'

import useLocale from '@/hooks/useLocale'

function Profile() {
  const { t } = useLocale()
  return (
    <Layout type="normal" title={t.page.setting.profile}>
      <div className="h-screen pt-12">
        <SettingLayout>
          <SettingBase title={t.page.setting.profile}>
            <div className="flex justify-center flex-none my-5">
              <AvatarForm/>
            </div>
            <div className="flex-1">
              <ProfileForm />
            </div>
          </SettingBase>
        </SettingLayout>
      </div>
    </Layout>
  )
}

export default Profile
