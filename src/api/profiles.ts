import { supabase } from '@/utils/supabase'
import type { Database } from '@/types/schema'

export type InputProfile =  Database extends {
  public : { Tables: { profiles: { Update: infer U  } }  }
} ? U : never

const profiles =  supabase.from('profiles')

async function getProfileById(id: string) {
  try {
    const { data, error, status, statusText } = await profiles.select().eq('id', id).single()

    if (status !== 200 && statusText !== 'OK') {
      console.log(error)
      throw new Error(error?.message)
    }

    return data
  } catch (error) {
  }
}

async function updateProfile(profile: InputProfile) {
  try {
    const { data, error, status, statusText } = await profiles
      .update(profile)
      .eq('id', profile.id)
      .select().single()

    if (status !== 200 && statusText !== 'OK' ) {
      throw new Error(error?.message)
    }

    if (!data) {
      throw new Error("not found data")
    }

    return data
  } catch (error) {
  }
}

export { getProfileById, updateProfile }