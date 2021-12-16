import Image from 'next/image';

const Values = () => {
  return (
    <div>
      <div className='w-2/3 mx-auto bg-white -mb-60'>
        <div className='text-center py-12 mb-10'>
          <h2
            id='values'
            className='text-black-font inline font-extrabold mr-4 text-3xl align-middle tracking-widest'
          >
            価値観
          </h2>
          <p className='inline mx-4 text-lg align-middle text-bold text-green-font'>VALUES</p>
        </div>
        <div className='flex items-end text-center bg-white'>
          <div className='w-1/3 h-auto px-8 border-r-2 border-green-line bg-white'>
            <div>
              <Image src='/introduction/value1.png' alt='value1' width={200} height={200} />
            </div>
            <p className='py-5 text-extrabold tracking-wider text-lg'>価値観01</p>
            <div className='text-black-font leading-loose items-center text-sm tracking-widest text-left'>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
          <div className='w-1/3 h-auto px-8 border-r-2 border-green-line bg-white'>
            <div>
              <Image src='/introduction/value2.png' alt='value2' width={200} height={200} />
            </div>
            <p className='py-5 text-extrabold tracking-wider text-lg'>価値観02</p>
            <div className='text-black-font leading-loose items-center text-sm tracking-widest text-left'>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
          <div className='w-1/3 h-auto px-8 bg-white'>
            <div>
              <Image src='/introduction/value3.png' alt='value3' width={200} height={200} />
            </div>
            <p className='py-5 text-extrabold tracking-wider text-lg'>価値観03</p>
            <div className='text-black-font leading-loose items-center text-sm tracking-widest text-left'>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
