import Image from 'next/image';
import ProgressBar from './progressbar';

const Skills = () => {
  return (
    <div id='skills' className='h-auto bg-skills -mt-12 bg-cover'>
      <div className='w-2/3 flex mx-auto py-32'>
        <div className='items-center w-1/2 mt-16 mx-7'>
          <Image src='/introduction/skill.png' alt='skill' width={535} height={372} />
        </div>
        <div className='items-center w-1/2'>
          <h1 className='inline w-1/2 text-black-font text-3xl font-bold mx-1 align-middle tracking-widest font-mono'>
            スキル
          </h1>
          <p className='inline w-1/2 text-green-font font-semibold mx-1 align-middle tracking-wider'>
            SKILLS
          </p>
          <p className='text-black-font tracking-widest text-base leading-loose my-5'>
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
