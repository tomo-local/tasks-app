import Head from 'next/head'
import { FC, ReactNode, useLayoutEffect } from 'react'

type LayoutProps = {
  children?: ReactNode
  title: string
  className?: string | undefined
}

const Layout: FC<LayoutProps> = ({ children, title, className }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={className}>{children}</main>
    </>
  )
}

export default Layout
