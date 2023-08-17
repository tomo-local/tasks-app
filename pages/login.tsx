'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { string } from 'yup'

import Layout from '@/components/common/layouts/Layout'
import useLocale from '@/hooks/useLocale'
import { supabase } from '@/utils/supabase'
import { useSetAtom } from 'jotai'
import { circularProcessAtom } from '@/jotai/tools/atom'

type LoginForm = {
  email: string
  password: string
}

export default function Login() {
  const { t, locale } = useLocale()
  const router = useRouter()

  const schema = yup
    .object()
    .shape({
      email: string()
        .label(t.login.form.email.label)
        .required((v) =>
          locale === 'ja'
            ? `${v.label}${t.error.notEntered}`
            : `${t.error.notEntered}${v.label}`
        ),
      password: string()
        .label(t.login.form.password.label)
        .required((v) =>
          locale === 'ja'
            ? `${v.label}${t.error.notEntered}`
            : `${t.error.notEntered}${v.label}`
        ),
    })
    .required()

  const setCircular = useSetAtom(circularProcessAtom)
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handelLogin = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    setCircular(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error?.message) {
        throw new Error(error.message)
      }

      if (data) {
      }

      setTimeout(() => router.refresh(), 1200)
    } catch (error) {}
  }

  return (
    <Layout type="login" title={t.login.title}>
      <div className="min-h-[100vh] sm:before:flex-grow sm:before:h-40 sm:before:block sm:after:h-40 sm:after:block sm:after:flex-grow block">
        <div className="block my-0 shrink-0 sm:mx-auto sm:max-w-[450px] sm:border sm:border-main sm:rounded-lg">
          <div className="sm:h-auto sm:min-h-[500px] pt-14 px-12 pb-7">
            <h1>ログイン</h1>
            <form action=""></form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
