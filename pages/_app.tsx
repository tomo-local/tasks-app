import type { AppProps } from 'next/app'
import { Provider } from 'jotai'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import '@s/globals.css'

export default function App({
  Component,
  pageProps,
}: AppProps) {

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
