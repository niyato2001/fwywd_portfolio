import Image from 'next/image';
import Headline from './headline_component';

const headName = { japanese: '3年後にやりたいこと', english: 'FUTURE' };

const Future = () => (
  <div className='h-auto w-full bg-future bg-cover bg-center'>
    <div className='h-80'></div>
    <div className='h-auto'></div>
    <div className='w-full laptop_l:w-2/3 mx-auto pb-0 laptop_l:pb-11 pt-32 laptop_l:pt-2 flex flex-wrap justify-center laptop_l:flex-nowrap'>
      <div className='w-full laptop_l:w-1/2 h-auto items-end'>
        <div id='future' className=''>
          <Headline japanese={headName.japanese} english={headName.english} />
        </div>
        <div className='text-black-font mt-5 leading-loose items-center text-sm tracking-widest'>
          <p className='pb-3 px-5 laptop_l:px-0 laptop_l:pb-0'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
      <div classNmae='w-full mx-auto items-end laptop_l:w-1/2'>
        <div className='mb-0 pb-0 items-end laptop_l:items-stretch pl-0 laptop_l:pl-10'>
          <Image src='/introduction/future.png' alt='3年後' width={480} height={251} />
        </div>
      </div>
    </div>
  </div>
);

export default Future;
