import Head from 'next/head';
import Footer from '../components/footer';
import Image from 'next/image';
import Header from '../components/header';
import Main from '../components/main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>自己紹介</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
