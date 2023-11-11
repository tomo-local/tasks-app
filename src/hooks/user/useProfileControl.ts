import { useAtom } from 'jotai'
import { profileAtom } from '@/jotai/account/user'
import useAlert from '@/hooks/useAlert'
import useLocale from '@/hooks/useLocale'

type InputValue = string | null | undefined

import { updateProfile as updateProfileAPI, InputProfile } from '@/api/profiles'

export default function useProfile() {
  const [profile, setProfile] = useAtom(profileAtom)
  const { showAlert } = useAlert()
  const { t } = useLocale()

  const updateProfile = async (profile: InputProfile, label: string) => {
    try {
      const res = await updateProfileAPI({
        ...profile,
        updated_at: new Date().toLocaleString('ja-JP'),
      })

      setProfile(res)

      showAlert('success', `${t.alert.update.success} : ${label}`)
    } catch (e) {}
  }

  const handleFullNameSave = async (value: InputValue) => {
    try {
      updateProfile(
        {
          ...profile,
          full_name: value,
        },
        t.profile.baseProfile.fullName.label,
      )
    } catch (error) {
      console.log(error)
      throw new Error(t.alert.update.failure)
    }
  }

  const handleLocationSave = async (value: InputValue) => {
    try {
      updateProfile(
        {
          ...profile,
          location: value,
        },
        t.profile.baseProfile.location.label,
      )
    } catch (error) {
      console.log(error)
      throw new Error(t.alert.update.failure)
    }
  }
  const handleDescription = async (value: InputValue) => {
    try {
      updateProfile(
        {
          ...profile,
          description: value,
        },
        t.profile.baseProfile.description.label,
      )
    } catch (error) {
      console.log(error)
      throw new Error(t.alert.update.failure)
    }
  }

  return {
    profile,
    handleFullNameSave,
    handleLocationSave,
    handleDescription,
  }
}
