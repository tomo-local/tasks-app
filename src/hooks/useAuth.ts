import { supabase } from '@/utils/supabase'
import { useRouter } from 'next/navigation'

export type SignInType = {
  email: string
  password: string
}

export default function useAuth() {
  const { auth } = supabase
  const router = useRouter()

  const signIn = async ({ email, password }: SignInType) => {
    const { data, error } = await auth.signInWithPassword({ email, password })

    if (error?.message) {
      throw new Error(error.message)
    }

    if (data) {
      // TODO: set auth atom
      console.log(data)
    }

    setTimeout(() => router.refresh(), 1000)
  }

  const signOut = async () => {
    const { error } = await auth.signOut()

    if (error?.message) {
      throw new Error(error.message)
    }

    // TODO: reset auth atom

    setTimeout(() => router.refresh(), 500)
  }

  return {
    signIn,
    signOut,
  }
}
