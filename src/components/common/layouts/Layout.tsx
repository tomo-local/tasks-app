import { ReactNode } from 'react'
import Head from 'next/head'

import Header from '@/components/common/layouts/Header'
import Drawer from '@/components/common/layouts/Drawer'


type Props = {
  title: string
  type: 'normal' | 'login'
  children: ReactNode
}

export default function Layout({
  title,
  type,
  children,
}: Props) {
  return (
    <div className="static flex">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      {type !== 'login' && (
        <>
          <Header />
          <Drawer/>
        </>
      )}
      <main className="flex-grow w-screen h-screen z-base bg-base-10">
        {children}
      </main>
    </div>
  )
}
