import { supabase } from '@/utils/supabase'

const storage = supabase.storage
const avatarStorage = storage.from('avatars')

export function getAvatarUrl(path: string | null | undefined) {
  if (!path) {
    return ''
  }

  const { data } = avatarStorage.getPublicUrl(path)

  if (!data.publicUrl) {
    throw new Error('do not avatar url')
  }

  return data.publicUrl
}
