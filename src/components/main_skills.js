import Image from 'next/image';
import Headline from './headline_component';
import ProgressBar from './progressbar';

const headName = { japanese: 'スキル', english: 'SKILLS' };

const Skills = () => {
  return (
    <div
      id='skills'
      className='h-auto bg-skills -mt-24 bg-cover bg-center text-center laptop_l:text-justify'
    >
      <div className='w-5/6 laptop_l:w-2/3 py-20 laptop_l:flex mx-auto laptop_l:py-32'>
        <div className='hidden laptop_l:block items-center w-1/2 mt-16 mx-7'>
          <Image src='/introduction/skill.webp' alt='skill' width={535} height={372} />
        </div>
        <div className='w-full text-center py-5 items-center laptop_l:w-1/2 laptop_l:py-0 laptop_l:text-left'>
          <Headline japanese={headName.japanese} english={headName.english} />
          <div className='block laptop_l:hidden items-center w-full text-center'>
            <Image src='/introduction/skill.png' alt='skill' width={535} height={372} />
          </div>
          <p className='text-black-font tracking-widest text-base leading-loose my-5 text-justify'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className='bg-white p-7'>
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
};

export default Skills;
