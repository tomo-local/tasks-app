import { atomWithStorage } from 'jotai/utils'
import type { Database } from '@/types/schema'

type ExtractUserType<T> = T extends {
  public: { Tables: { profiles:{ Row: infer U }} }
}
  ? U
  : never

type UserProfile = ExtractUserType<Database>

type User = {
  profile: UserProfile | null | undefined
  avatarUrl: string
}

const userAtom = atomWithStorage<User | null | undefined>("user", null)


export { userAtom }