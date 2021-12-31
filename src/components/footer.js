import Image from 'next/image';

const Footer = () => (
  <div className='relative z-10 bg-black-bg text-center w-full h-auto text-white -mt-2 laptop_l:mt-0'>
    <div>
      <div className='w-full laptop_l:hidden ml-auto mr-auto py-6 tracking-widest flex flex-wrap'>
        <p className='w-1/2 text-xs  py-3 pl-12'>お問い合わせ</p>
        <p className='w-1/2 text-xs  py-3 pr-12'>助成金について</p>
        <p className='w-7/12 text-xs py-3 pl-2'>特定商取引法に基づく表記</p>
        <p className='w-5/12 text-xs align-middle py-3'>プライバシーポリシー</p>
      </div>
      <div className='hidden laptop_l:block ml-auto mr-auto py-10 tracking-wide'>
        <span className='text-xs mx-1 align-middle'>CREATED BY</span>
        <span className='mx-1 font-bold align-middle'>名前 太郎</span>
      </div>
    </div>
    <div className='mb-3 laptop_l:my-3'>
      <Image src='/introduction/logo_white.png' alt='logo' width={120} height={144} />
    </div>
    <div>
      <div className='items-center ml-auto mr-auto my-8'>
        <div className='inline mx-2'>
          <Image src='/introduction/twitter.png' alt='twitter' width={24} height={20} />
        </div>
        <div className='inline mx-2'>
          <Image src='/introduction/facebook.png' alt='facebook' width={20} height={20} />
        </div>
      </div>
    </div>
    <div className='mb-4 laptop_l:mb-0 font-sans'>
      <p className='tracking-widest pb-8 text-sm laptop_l:text-base'>© 2021 KIKAGAKU</p>
    </div>
  </div>
);

export default Footer;
