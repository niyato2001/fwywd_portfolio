import Image from 'next/image';

export default function PageFooter() {
  return (
    <div className='relative z-10 -mt-2 w-full h-auto text-center text-white bg-black-bg laptop_l:mt-0'>
      <div>
        <div className='flex flex-wrap py-6 mr-auto ml-auto w-full tracking-widest laptop_l:hidden'>
          <p className='py-3 pl-12 w-1/2 text-xs'>お問い合わせ</p>
          <p className='py-3 pr-12 w-1/2 text-xs'>助成金について</p>
          <p className='py-3 pl-2 w-7/12 text-xs'>特定商取引法に基づく表記</p>
          <p className='py-3 w-5/12 text-xs align-middle'>プライバシーポリシー</p>
        </div>
        <div className='hidden py-10 mr-auto ml-auto tracking-wide laptop_l:block'>
          <span className='mx-1 text-xs align-middle'>CREATED BY</span>
          <span className='mx-1 font-bold align-middle'>名前 太郎</span>
        </div>
      </div>
      <div className='mb-3 laptop_l:my-3'>
        <Image src='/introduction/logo_white.png' alt='logo' width={120} height={144} />
      </div>
      <div>
        <div className='items-center my-8 mr-auto ml-auto'>
          <div className='inline mx-2'>
            <Image src='/introduction/twitter.png' alt='twitter' width={24} height={20} />
          </div>
          <div className='inline mx-2'>
            <Image src='/introduction/facebook.png' alt='facebook' width={20} height={20} />
          </div>
        </div>
      </div>
      <div className='mb-4 font-sans laptop_l:mb-0'>
        <p className='pb-8 text-sm tracking-widest laptop_l:text-base'>© 2021 KIKAGAKU</p>
      </div>
    </div>
  );
}
