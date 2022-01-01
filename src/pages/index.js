import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

export default function Home() {
  return (
    <div box-border>
      <Head>
        <title>自己紹介</title>
      </Head>
      <Main />
    </div>
  );
}
