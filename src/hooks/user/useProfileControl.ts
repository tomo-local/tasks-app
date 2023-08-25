import { useAtom } from 'jotai'
import { profileAtom } from '@/jotai/account/user';
import useAlert from '@/hooks/useAlert';

type InputValue = string | null | undefined

import { updateProfile as updateProfileAPI, InputProfile } from '@/api/profiles';

export default function useProfile() {
  const [profile, setProfile] = useAtom(profileAtom)
  const { showAlert } = useAlert()

  const updateProfile = async (profile: InputProfile) => {
    try {
      const res = await updateProfileAPI({
        ...profile,
        updated_at: new Date().toLocaleString('ja-JP'),
      })

      if (res) {
        setProfile(res)
      }
    } catch (e) {

    }
  }

  const handleFullNameSave = async (value: InputValue) => {
    try {
      console.log("aa",value);

      updateProfile({
        ...profile,
        full_name: value,
      })
      showAlert("success", "名前の更新に成功しました")
    } catch (error) {
      console.log(error)
      throw new Error('full_name')
    }
  }

    const handleLocationSave = async (value: InputValue) => {
      try {
        updateProfile({
          ...profile,
          location: value,
        })
        showAlert('success', 'ok')
      } catch (error) {
        console.log(error)
        throw new Error('location')
      }
    }
    const handleSelfIntroduction = async (value: InputValue) => {
      try {
        updateProfile({
          ...profile,
          self_introduction: value,
        })
        showAlert('success', 'ok')
      } catch (error) {
        console.log(error)
        throw new Error('self_introduction')
      }
    }

  return {
    profile,
    handleFullNameSave,
    handleLocationSave,
    handleSelfIntroduction,
  }
}
