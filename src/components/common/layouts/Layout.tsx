import { ComponentProps } from 'react'
import clsx from 'clsx'

import Head from 'next/head'
import { useAtomValue } from 'jotai/react'

import Header from '@/components/common/layouts/Header'
import Drawer from '@/components/common/layouts/Drawer'
import CircularProcess from '@/components/common/CircularProcess'
import { circularProcessAtom } from '@/jotai/tools/atom'

interface Props extends ComponentProps<'main'> {
  title: string
  type: 'normal' | 'login'
}

export default function Layout({ title, type, className, ...props }: Props) {
  const circularProcess = useAtomValue(circularProcessAtom)
  return (
    <div className="static flex bg-base-10">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      {circularProcess && <CircularProcess />}
      {type !== 'login' && (
        <>
          <Header />
          <Drawer />
        </>
      )}
      <main
        className={clsx(
          'flex-grow w-screen z-base bg-base-10 layer h-screen',
          className,
        )}
        {...props}
      />
    </div>
  )
}
