import { ReactNode } from 'react'
import Head from 'next/head'
import { useAtomValue } from 'jotai/react';

import Header from '@/components/common/layouts/Header'
import Drawer from '@/components/common/layouts/Drawer'
import CircularProcess from '@/components/common/CircularProcess'
import { circularProcessAtom } from '@/jotai/tools/atom';


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
  const circularProcess =useAtomValue(circularProcessAtom)
  return (
    <div className="static flex bg-base-10">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      {circularProcess && <CircularProcess/>}

      {type !== 'login' && (
        <>
          <Header />
          <Drawer />
        </>
      )}
      <main className="flex-grow w-screen z-base bg-base-10 layer">
        {children}
      </main>
    </div>
  )
}
