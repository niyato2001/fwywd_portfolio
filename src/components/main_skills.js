import Image from 'next/image';

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
          <p className='text-black-font tracking-widest text-base leading-loose mt-5'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className='bg-white p-7'>
            <p className='text-green-font font-semibold tracking-wider'>SKILLSKILL</p>
            <div className='flex items-center'>
              <div className='w-full h-3.5 bg-green-prolight rounded'>
                <div className='h-3.5 bg-green-prodark w-2/5 rounded-l'></div>
              </div>
              <span className=' text-green-font tracking-wider mx-4'>40%</span>
            </div>
            <p className='text-green-font font-semibold tracking-wider'>SKILLSKILL</p>
            <div className='flex items-center'>
              <div className='w-full h-3.5 bg-green-prolight rounded'>
                <div className='h-3.5 bg-green-prodark w-2/5 rounded-l'></div>
              </div>
              <span className=' text-green-font tracking-wider mx-4'>40%</span>
            </div>
            <p className='text-green-font font-semibold tracking-wider'>SKILLSKILL</p>
            <div className='flex items-center'>
              <div className='w-full h-3.5 bg-green-prolight rounded'>
                <div className='h-3.5 bg-green-prodark w-2/5 rounded-l'></div>
              </div>
              <span className=' text-green-font tracking-wider mx-4'>40%</span>
            </div>
            <p className='text-green-font font-semibold tracking-wider'>SKILLSKILL</p>
            <div className='flex items-center'>
              <div className='w-full h-3.5 bg-green-prolight rounded'>
                <div className='h-3.5 bg-green-prodark w-2/5 rounded-l'></div>
              </div>
              <span className=' text-green-font tracking-wider mx-4'>40%</span>
            </div>
          </div>
        </div>
      </div>
      <div className='h-10'></div>
    </div>
  );
};

export default Skills;
