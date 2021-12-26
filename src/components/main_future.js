import Image from 'next/image';
import Headline from './headline_component';

const headName = { japanese: '3年後にやりたいこと', english: 'FUTURE' };

const Future = () => (
  <div className='h-auto w-full bg-future bg-cover bg-center'>
    <div className='h-96'></div>
    <div className='h-auto'></div>
    <div className='w-2/3 mx-auto pb-11 flex'>
      <div className='w-1/2 h-auto items-end'>
        <div id='future' className=''>
          <Headline japanese={headName.japanese} english={headName.english} />
        </div>
        <div className='text-black-font mt-5 leading-loose items-center text-sm tracking-widest'>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
      <div classNmae='items-end'>
        <div className='pl-10'>
          <Image src='/introduction/future.png' alt='3年後' width={480} height={251} />
        </div>
      </div>
    </div>
  </div>
);

export default Future;
