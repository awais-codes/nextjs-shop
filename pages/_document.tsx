import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='m-0'>
        <div className='mx-5 my-3'>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
