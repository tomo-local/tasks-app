import { supabase } from '@/utils/supabase'

async function getProfileById(id: string) {
  try {
    const { data, error, status, statusText } = await supabase.from('profiles').select().eq('id', id).single()

    if (status !== 200 && statusText !== 'OK') {
      console.log(error)
      throw new Error(error?.message)
    }

    return data
  } catch (error) {
  }
}



export { getProfileById }