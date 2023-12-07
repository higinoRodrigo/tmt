import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/logo2.svg" />
        <meta name="description" content="Inteligência logística" />
        <meta name="keywords" content="tmt, logística" />
        <meta name="author" content="Tmt" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
