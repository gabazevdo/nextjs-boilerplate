import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Boilerplete</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <meta
          name="description"
          content="A boilerplate project starter to work with Typescript, React, NextJS and Styled-Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
