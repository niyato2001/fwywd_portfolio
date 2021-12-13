import Image from 'next/image'


const About = () => (
    <div className='bg-about-bg bg-cover'>
        <div className='w-72 py-20 items-center mx-auto text-center'>
            <h1 className='inline w-1/2 text-black-font text-3xl font-bold mx-1'>私について</h1>
            <p className='inline w-1/2 text-green-font font-semibold mx-1'>About</p>
        </div>
        <div className='w-2/3 h-96 flex mx-auto items-center text-center'>
            <div className='w-1/3 text-center items-center'>
                <Image src="/introduction/about-1.png" alt="About1" width={184} height={157} />
                <p className='text-green-font text-xl font-bold my-3'>趣味</p>
            </div>
            <div className="w-1/3">
                <Image src="/introduction/about-2.png" alt="About2" width={206} height={158} />
                <p className='text-green-font text-xl font-bold my-3'>好きな食べ物</p>
            </div>
            <div className='w-1/3'>
                <Image src="/introduction/about-3.png" alt="About3" width={245} height={149} />
                <p className='text-green-font text-xl font-bold my-3'>性格</p>
            </div>


        </div>
        <div className='h-auto'>

        </div>


    </div>

);

export default About;