import Head from 'next/head';
import Image from 'next/image';
import Main from '../components/main';

export default function Home() {
  return (
    <div box-border>
      <Head>
        <title>自己紹介</title>
        <meta property='og:url' content='https://fwywd-portfolio-ten.vercel.app/' />
        <meta property='og:type' content='article' />
        <meta
          property='og:image'
          content='https://fwywd-portfolio-ten.vercel.app/introduction/OGP.jpg'
        />
        <meta property='og:title' content='自己紹介' />
        <meta property='fb:app_id' content='App-ID（15文字の半角数字）' />
        <meta property='fb:admins' content='adminID（15文字の半角数字）' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Main />
    </div>
  );
}
