import Image from 'next/image';

const Future = () => (
  <div className='h-auto w-full bg-future bg-cover'>
    <div className='h-96'></div>
    <div className='h-auto'></div>
    <div className='w-2/3 mx-auto pb-11 flex'>
      <div className='w-1/2 h-auto items-end'>
        <div id='future' className=''>
          <h2 className='text-black-font inline font-extrabold mr-4 text-3xl align-middle tracking-widest font-mono'>
            3年後にやりたいこと
          </h2>
          <p className='inline mx-4 text-lg align-middle text-bold text-green-font'>FUTURE</p>
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
