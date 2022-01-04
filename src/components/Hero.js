import Head from 'next/head';
import Image from 'next/image';

const Hero = () => (
  <div>
    <div
      className='bg-green-bg w-full h-auto flex-none font-mono flex flex-wrap 
    laptop_l:flex-nowrap laptop_l:items-center'
    >
      <div
        className='w-11/12 h-24 ml-auto mr-auto text-center pt-5
      laptop_l:ml-32  laptop_l:w-1/2 laptop_l:h-full laptop_l:text-left laptop_l:pt-0'
      >
        <h1 className='text-white text-3xl font-extrabold tracking-widest'>メインタイトル</h1>
        <h2 className='text-green-prolight text-xl py-2 font-bold tracking-widest'>サブタイトル</h2>
      </div>
      <div
        className='w-1/2 h-auto mx-auto text-center pb-5
      laptop_l:text-right laptop_l:ml-auto laptop_l:mr-12 laptop_l:py-12 laptop_l:h-full'
      >
        <Image src='/introduction/hero-min.png' alt='header' width={560} height={480} />
      </div>
    </div>
  </div>
);

export default Hero;
