'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { string } from 'yup'
import Input from '@material-tailwind/react/components/Input'
import { Button, Card, CardBody, IconButton, Typography } from '@material-tailwind/react'
import EyeIcon from '@heroicons/react/24/outline/EyeIcon'
import EyeSlashIcon from '@heroicons/react/24/outline/EyeSlashIcon'

import Layout from '@/components/common/layouts/Layout'
import useLocale from '@/hooks/useLocale'
import { supabase } from '@/utils/supabase'
import { useSetAtom } from 'jotai'
import { circularProcessAtom } from '@/jotai/tools/atom'
import Link from 'next/link'


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
        <div className="block my-0 shrink-0 sm:mx-auto sm:max-w-[450px] sm:border sm:border-main sm:rounded-lg  bg-base-00">
          <div className="sm:h-auto sm:min-h-[500px] pt-14 px-12 pb-7">
            <Card className="w-ful bg-base-00" shadow={false}>
              <Typography variant="h4" className="mb-1 text-main">
                {t.login.form.title}
              </Typography>
              <Typography
                variant="paragraph"
                color="gray"
                className="mb-2 font-normal"
              >
                {t.login.form.description}
              </Typography>
              <CardBody className="w-full px-0">
                <form action="relation">
                  <div className="flex flex-col gap-6 mb-10">
                    <div>
                      <Input label={t.login.form.email.label} size="lg" />
                    </div>
                    <div className="relative flex w-full">
                      <Input
                        type={isShowPassword ? 'text' : 'password'}
                        label={t.login.form.password.label}
                        size="lg"
                      />
                      <IconButton
                        variant="text"
                        className="absolute right-1 top-0.5 text-main"
                        onClick={() => {
                          setIsShowPassword(!isShowPassword)
                        }}
                      >
                        {isShowPassword ? (
                          <EyeIcon className="w-6 h-6" />
                        ) : (
                          <EyeSlashIcon className="w-6 h-6" />
                        )}
                      </IconButton>
                    </div>
                    <div>
                      <Typography className="text-sub group hover:text-main">
                        <Link href={'/login'}>
                          <Button
                            variant="text"
                            // size="sm"
                            className="p-1 text-sm font-normal normal-case"
                          >
                            {t.login.form.forgetPasswordLink}
                          </Button>
                        </Link>
                      </Typography>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="basis-2/3">
                      <Typography>
                        <Link href={'/login'} className="px-2 py-2 ">
                          <Button
                            variant="text"
                            // size="sm"
                            className="p-1 text-sm font-normal normal-case"
                          >
                            {t.login.form.changeSignUpButton}
                          </Button>
                        </Link>
                      </Typography>
                    </div>
                    <div className="relative basis-1/3">
                      <Button className="absolute right-0 w-32 tracking-widest bg-main">
                        {t.login.form.submit}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
