import { useRouter } from 'next/navigation'
import { useSetAtom } from 'jotai/react';
import { RESET } from 'jotai/utils';

import { supabase } from '@/utils/supabase'
import { getAvatarUrl } from '@/api/storage/avatar';
import { getProfileById } from '@/api/profiles'
import { userAtom } from '@/jotai/account/user'

export type SignInType = {
  email: string
  password: string
}

export default function useAuth() {
  const { auth } = supabase
  const router = useRouter()
  const setUser = useSetAtom(userAtom)

  const signIn = async ({ email, password }: SignInType) => {
    const { data, error } = await auth.signInWithPassword({ email, password })

    if (error?.message) {
      throw new Error(error.message)
    }

    if (!data.user) {
      throw new Error("Do not exist user profile")
    }

    const profile = await getProfileById(data.user?.id)
    const avatarUrl = getAvatarUrl(profile?.avatar_url)

    setUser({ auth: data.user ,profile, avatarUrl })
    setTimeout(() => router.refresh(), 1000)
  }

  const signOut = async () => {
    const { error } = await auth.signOut()

    if (error?.message) {
      throw new Error(error.message)
    }

    setTimeout(() => router.refresh(), 200)
    setUser(RESET)
  }

  return {
    auth,
    signIn,
    signOut,
  }
}
