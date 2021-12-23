import Image from 'next/image';
import Headline from './headline_component';

const headName = { japanese: '私について', english: 'ABOUT' };

const About = () => (
  <div id='about' className='bg-about-bg bg-cover'>
    <div className='w-72 py-20 mx-auto text-center'>
      <Headline japanese={headName.japanese} english={headName.english} />
    </div>
    <div className='w-2/3 h-96 flex mx-auto items-end text-center'>
      <div className='w-1/3 items-center px-4'>
        <Image src='/introduction/about-1.png' alt='About1' width={184} height={157} />
        <p className='text-green-font text-2xl font-extrabold my-7'>趣味</p>
        <p className='text-black-font tracking-wider text-sm leading-loose text-left'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className='w-1/3 items-center px-4'>
        <Image src='/introduction/about-2.png' alt='About2' width={206} height={158} />
        <p className='text-green-font text-2xl font-extrabold my-7'>好きな食べ物</p>
        <p className='text-black-font tracking-wider text-sm leading-loose text-left'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className='w-1/3 items-center px-4'>
        <Image src='/introduction/about-3.png' alt='About3' width={245} height={149} />
        <p className='text-green-font text-2xl font-extrabold my-7'>性格</p>
        <p className='text-black-font tracking-wider text-sm leading-loose text-left'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </div>
    <div className='h-24'></div>
  </div>
);

export default About;
