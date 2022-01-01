import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>自己紹介</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
