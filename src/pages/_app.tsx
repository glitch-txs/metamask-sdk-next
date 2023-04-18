import { web3Store } from '@/store/web3Store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const initMM = web3Store((s)=>s.initMMSDK)
  useEffect(initMM,[])

  return <Component {...pageProps} />
}
