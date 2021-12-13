import Head from 'next/head'
import Footer from '../components/footer'
import Main from '../components/main'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Main />
      

      
      <Footer />
      
    </div>
  )
}
