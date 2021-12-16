import Head from 'next/head';
import Footer from '../components/footer';
import Image from 'next/image';
import Header from '../components/header';
import Main from '../components/main';

export default function Home() {
  return (
    <div>
      <Head></Head>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}
