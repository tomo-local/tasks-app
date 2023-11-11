import type { AppProps } from 'next/app'
import { Provider } from 'jotai'
// import { AnimatePresence } from 'framer-motion'
import '@styles/globals.css'

export default function App({
  Component,
  pageProps,
}: AppProps) {

  return (
    <Provider>
      {/* <AnimatePresence mode="wait"> */}
        <Component {...pageProps} />
      {/* </AnimatePresence> */}
    </Provider>
  )
}
