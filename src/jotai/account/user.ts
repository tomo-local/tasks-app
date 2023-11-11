import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import type { Database } from '@/types/schema'
import { User as AuthUser } from '@supabase/gotrue-js/src/lib/types'

type ExtractUserType<T> = T extends {
  public: { Tables: { profiles: { Row: infer U } } }
}
  ? U
  : never

type UserProfile = ExtractUserType<Database>

type User = {
  auth: AuthUser | null | undefined
  profile: UserProfile | null | undefined
  avatarUrl: string | undefined
}

const userAtom = atomWithStorage<User | null | undefined>('user', null)

const profileAtom = atom(
  (get) => {
    const user = get(userAtom)
    return user?.profile
  },
  (get, set, update: UserProfile | undefined) => {
    const user = get(userAtom)

    set(userAtom, {
      auth: user?.auth,
      avatarUrl: user?.avatarUrl,
      profile: update
    })
  },
)

const avatarUrlAtom = atom((get) => {
  const user = get(userAtom)
  return user?.avatarUrl
}, (get, set, update: string) => {
    const user = get(userAtom)
      set(userAtom, {
        auth: user?.auth,
        profile: user?.profile,
        avatarUrl: update,
      })
}
)

export { userAtom, profileAtom, avatarUrlAtom }
