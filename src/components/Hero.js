import Head from 'next/head';
import Image from 'next/image';

const Hero = () => (
  <div>
    <div className='flex flex-wrap flex-none items-center pt-5 font-mono bg-green-bg laptop_l:flex-nowrap laptop_l:pt-0'>
      <div className='mr-auto ml-auto w-11/12 h-24 text-center laptop_l:ml-32 laptop_l:w-1/2 laptop_l:h-full laptop_l:text-left'>
        <h1 className='text-3xl font-extrabold tracking-widest text-white'>メインタイトル</h1>
        <h2 className='py-2 text-xl font-bold tracking-widest text-green-prolight'>サブタイトル</h2>
      </div>
      <div
        className='      laptop_l:text-right laptop_l:ml-auto laptop_l:mr-12 laptop_l:py-12 
w-1/2 h-auto mx-auto text-center pb-5'
      >
        <Image src='/introduction/hero-min.png' alt='header' width={560} height={480} />
      </div>
    </div>
  </div>
);

export default Hero;
