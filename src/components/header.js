import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import List from './list';

const headerList = [
  { link: '#about', name: 'ABOUT' },
  { link: '#skills', name: 'SKILLS' },
  { link: '#values', name: 'VALUES' },
  { link: '#future', name: 'FUTURE' },
];

const Header = () => (
  <div>
    <div className='w-full text-center h-auto laptop_l:h-24'>
      <div className='w-11/12 mx-auto float-none laptop_l:float-left laptop_l:w-auto'>
        <Image src='/introduction/logo.png' alt='Head log' width={180} height={90} />
      </div>

      <div className='w-11/12 h-auto ml-auto mr-auto float-none laptop_l:float-right laptop_l:mr-0 laptop_l:w-auto'>
        <div
          className='text-green-font -mt-3 mx-auto h-10 justify-center 
          flex-auto flex items-center font-bold tracking-wider text-lg 
          laptop_l:h-24 laptop_l:mt-0 laptop_l:pb-0 laptop_l:justify-end '
        >
          {headerList.map((listItem, index) => {
            return <List link={listItem.link} name={listItem.name} key={index} />;
          })}
        </div>
      </div>
    </div>
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
        <Image src='/introduction/hero.png' alt='header' width={560} height={480} />
      </div>
    </div>
  </div>
);

export default Header;
