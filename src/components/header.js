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
    <div className='overflow-hidden w-full h-24'>
      <div className='float-left'>
        <Image src='/introduction/logo.png' alt='Head log' width={192} height={96} />
      </div>

      <div className='float-right mr-2'>
        <ul className='text-green-font h-24 flex items-center font-bold tracking-wider text-lg'>
          {headerList.map((listItem, index) => {
            return <List link={listItem.link} name={listItem.name} key={index} />;
          })}
        </ul>
      </div>
    </div>
    <div className='bg-green-bg w-full h-auto font-mono  flex items-center'>
      <div className='ml-32 justify-start'>
        <h1 className='text-white text-4xl font-extrabold tracking-widest'>メインタイトル</h1>
        <h2 className='text-green-prolight text-2xl py-2 font-bold tracking-widest'>
          サブタイトル
        </h2>
      </div>
      <div className='ml-auto mr-12 py-12'>
        <Image src='/introduction/hero.png' alt='header' width={560} height={480} />
      </div>
    </div>
  </div>
);

export default Header;
