import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument(): JSX.Element {
  return (
    <Html>
      <Head>
        <link rel='icon' type='image /x-icon' sizes='16x16' href='/favicon/fwywd_favicon.ico' />
      </Head>
      <body>
        <Main />
        <div id='portal'></div>
        <NextScript />
      </body>
    </Html>
  );
}
