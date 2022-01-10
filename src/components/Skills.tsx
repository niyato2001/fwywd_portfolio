import Image from 'next/image';
import Headline from './Headline';
import ProgressBar from './ProgressBar';

const headName = { japanese: 'スキル', english: 'SKILLS' };

export default function Skills(): JSX.Element {
  return (
    <div
      id='skills'
      className='-mt-24 h-auto text-center bg-center bg-cover bg-skills laptop_l:text-justify'
    >
      <div className='py-20 mx-auto w-5/6 laptop_l:flex laptop_l:py-32 laptop_l:w-2/3'>
        <div className='hidden items-center mx-7 mt-16 w-1/2 laptop_l:block'>
          <Image src='/introduction/skill.webp' alt='skill' width={535} height={372} />
          {
            //Webpファイルを使用。ブラウザにより表示されないことがあるかも
          }
        </div>
        <div className='items-center py-5 w-full text-center laptop_l:py-0 laptop_l:w-1/2 laptop_l:text-left'>
          <Headline japanese={headName.japanese} english={headName.english} />
          <div className='block items-center w-full text-center laptop_l:hidden'>
            <Image src='/introduction/skill.png' alt='skill' width={535} height={372} />
          </div>
          <p className='my-5 text-base tracking-widest leading-loose text-justify text-black-font'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className='p-7 bg-white'>
            <ProgressBar name='SKILLSKILL' percent='40%' />
            <ProgressBar name='SKILLSKILL' percent='40%' />
            <ProgressBar name='SKILLSKILL' percent='40%' />
            <ProgressBar name='SKILLSKILL' percent='40%' />
          </div>
        </div>
      </div>
      <div className='h-10'></div>
    </div>
  );
}
