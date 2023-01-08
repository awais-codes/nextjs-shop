import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <div className='mx-5 my-3'>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
