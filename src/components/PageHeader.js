import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import List from './list';

const headerList = [
  { link: 'about', name: 'ABOUT' },
  { link: 'skills', name: 'SKILLS' },
  { link: 'values', name: 'VALUES' },
  { link: 'future', name: 'FUTURE' },
];

export default function PageHeader() {
  return (
    <div>
      <div className='w-full h-auto text-center laptop_l:h-24'>
        <div className='float-none mx-auto w-11/12 laptop_l:float-left laptop_l:w-auto'>
          <Image
            src='/introduction/logo.png'
            alt='Head log'
            width={180}
            height={90}
            loading={'eager'}
            quality={100}
          />
        </div>

        <div className='float-none mr-auto ml-auto w-11/12 h-auto laptop_l:float-right laptop_l:mr-0 laptop_l:w-auto'>
          <div
            className='          laptop_l:h-24 laptop_l:mt-0 laptop_l:pb-0 laptop_l:justify-end 
text-green-font -mt-3 mx-auto h-10 justify-center 
          flex-auto flex items-center font-bold tracking-wider text-lg 
'
          >
            {headerList.map((listItem, index) => {
              return <List link={listItem.link} name={listItem.name} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
