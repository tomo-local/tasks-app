import type { Database } from '@/types/schema'
import { avatar } from '@material-tailwind/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY

export const supabase = createClientComponentClient<Database>({
  supabaseUrl,
  supabaseKey
})




