'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { object, string } from 'yup'
import { useSetAtom } from 'jotai/react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Alert from '@material-tailwind/react/components/Alert'
import Button from '@material-tailwind/react/components/Button'
import Card from '@material-tailwind/react/components/Card'
import CardBody from '@material-tailwind/react/components/Card/CardBody'
import CardFooter from '@material-tailwind/react/components/Card/CardFooter'
import IconButton from '@material-tailwind/react/components/IconButton'
import Input from '@material-tailwind/react/components/Input'
import Typography from '@material-tailwind/react/components/Typography'
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react/components/Menu'

import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import ExclamationCircleIcon from '@heroicons/react/24/outline/ExclamationCircleIcon'
import EyeIcon from '@heroicons/react/24/outline/EyeIcon'
import EyeSlashIcon from '@heroicons/react/24/outline/EyeSlashIcon'

import Layout from '@/components/common/layouts/Layout'
import useLocale from '@/hooks/useLocale'
import useAuth from '@/hooks/useAuth'
import { SignInType } from '@/hooks/useAuth'
import { circularProcessAtom } from '@/jotai/tools/atom'

export default function Login() {
  const { t, locale } = useLocale()
  const router = useRouter()
  const { signIn } = useAuth()

  const schema = object()
    .shape({
      email: string()
        .email((v) =>
          locale === 'ja'
            ? `${v.label}${t.error.notEntered}`
            : `${t.error.notEntered}${v.label}`,
        )
        .label(t.login.form.email.label)
        .required((v) =>
          locale === 'ja'
            ? `${v.label}${t.error.notEntered}`
            : `${t.error.notEntered}${v.label}`,
        ),
      password: string()
        .label(t.login.form.password.label)
        .required((v) =>
          locale === 'ja'
            ? `${v.label}${t.error.notEntered}`
            : `${t.error.notEntered}${v.label}`,
        ),
    })
    .required()

  const {
    control,
    handleSubmit
  } = useForm({
    mode: 'onSubmit',
    shouldUnregister: true,
    resolver: yupResolver(schema),
  })

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [open, setOpen] = useState(false)
  const setCircular = useSetAtom(circularProcessAtom)

  const handelLogin = async ({ email, password }: SignInType) => {
    if (!email || !password) {
      return
    }

    setCircular(true)
    try {
      await signIn({ email , password })
    } catch (error) {
      setOpen(true)
      setCircular(false)
    }
  }

  return (
    <Layout type="login" title={t.login.title}>
      <div className="min-h-[100vh] sm:before:grow sm:before:h-auto sm:before:min-h-[10rem] sm:after:min-h-auto sm:before:block sm:after:block sm:after:grow block flex-shrink-0">
        <div className="block my-0 shrink-0 sm:mx-auto sm:max-w-[450px] sm:border sm:border-main sm:rounded-lg  bg-base-00">
          <div className="sm:h-auto sm:min-h-[500px] pt-14 px-12">
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
                <form action="relation" onSubmit={handleSubmit(handelLogin)}>
                  <div className="flex flex-col gap-6 mb-10">
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field, fieldState: { invalid, error } }) => (
                        <div>
                          <Input
                            size="lg"
                            label={t.login.form.email.label}
                            className="text-no-webkit-fill"
                            {...field}
                            error={invalid || open}
                          />
                          {error && (
                            <Typography
                              variant="small"
                              className="mt-2 ml-1 text-error-main"
                            >
                              {error.message}
                            </Typography>
                          )}
                        </div>
                      )}
                    />
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field, fieldState: { invalid, error } }) => (
                        <div>
                          <div className="relative flex w-full">
                            <Input
                              type={isShowPassword ? 'text' : 'password'}
                              label={t.login.form.password.label}
                              className="text-no-webkit-fill"
                              size="lg"
                              {...field}
                              error={invalid || open}
                            />
                            <IconButton
                              variant="text"
                              className="!absolute right-1 top-0.5 text-main"
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
                          {error && (
                            <Typography
                              variant="small"
                              className="mt-2 ml-1 text-error-main"
                            >
                              {error.message}
                            </Typography>
                          )}
                        </div>
                      )}
                    />
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
                    <Alert
                      icon={
                        <ExclamationCircleIcon className="w-6 h-6 text-error-main" />
                      }
                      className="bg-error-base"
                      open={open}
                      action={
                        <IconButton
                          variant="text"
                          size="sm"
                          className="flex-shrink-0"
                          onClick={() => setOpen(false)}
                        >
                          <XMarkIcon className="w-6 h-6 text-error-main" />
                        </IconButton>
                      }
                    >
                      <Typography variant="small" className="text-error-main">
                        {t.login.form.failed}
                      </Typography>
                    </Alert>
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
                      <Button
                        type="submit"
                        className="absolute right-0 w-32 tracking-widest bg-main"
                      >
                        {t.login.form.submit}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardBody>
              <CardFooter className="flex items-center justify-center h-10">
                <Menu>
                  <MenuHandler>
                    <Button variant="text" className="p-1 text-main">
                      {t.language.title}:{' '}
                      {locale === 'en'
                        ? t.language.english
                        : t.language.japanese}
                    </Button>
                  </MenuHandler>
                  <MenuList className="min-w-[60px] p-0">
                    <Link
                      href={router.asPath}
                      locale="en"
                      passHref
                      className="outline-none"
                    >
                      <MenuItem
                        disabled={locale === 'en'}
                        className="flex justify-center rounded-none"
                        aria-selected
                      >
                        {t.language.english}
                      </MenuItem>
                    </Link>
                    <Link
                      href={router.asPath}
                      locale="ja"
                      className="outline-none"
                      passHref
                    >
                      <MenuItem
                        disabled={locale === 'ja'}
                        className="flex justify-center rounded-none"
                      >
                        {t.language.japanese}
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
