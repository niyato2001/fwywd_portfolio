import Image from 'next/image';
import Headline from './headline_component';

const headName = { japanese: '3年後にやりたいこと', english: 'FUTURE' };

const Future = () => (
  <div className='w-full h-auto bg-center bg-cover bg-future'>
    <div className='h-80'></div>
    <div className='h-auto'></div>
    <div className='flex flex-wrap justify-center pt-32 pb-0 mx-auto w-full laptop_l:flex-nowrap laptop_l:pt-2 laptop_l:pb-11 laptop_l:w-2/3'>
      <div className='items-end w-full h-auto laptop_l:w-1/2'>
        <div id='future' className=''>
          <Headline japanese={headName.japanese} english={headName.english} />
        </div>
        <div className='items-center mt-5 text-sm tracking-widest leading-loose text-black-font'>
          <p className='px-5 pb-3 laptop_l:px-0 laptop_l:pb-0'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
      <div classNmae='w-full mx-auto items-end laptop_l:w-1/2'>
        <div className='items-end pb-0 pl-0 mb-0 laptop_l:items-stretch laptop_l:pl-10'>
          <Image src='/introduction/future.png' alt='3年後' width={480} height={251} />
        </div>
      </div>
    </div>
  </div>
);

export default Future;
