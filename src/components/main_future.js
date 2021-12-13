import Image from 'next/image'

const Future = () => (
    <div id="future" className="h-auto w-full bg-future bg-cover">
        <div className="h-96"></div>
        <div className="h-auto"></div>
        <div className="w-3/5 mx-auto pb-11 flex">
            <div className="w-1/2 h-auto items-end">
                <div className=''>
                    <h2 className="inline font-extrabold mr-4 text-3xl align-middle tracking-widest">3年後にやりたいこと</h2>
                    <p className='inline mx-4 text-lg align-middle text-bold'>FUTURE</p>
                </div>
                <div className='mt-5 leading-loose items-center text-sm tracking-widest'>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキスト
                    </p>
                </div>
            </div>
            <div classNmae="items-end">
                <div className="pl-10">
                <Image src="/introduction/future.png" alt="3年後" width={480} height={251} />
                </div>
            </div>
        </div>
    </div>

);
    
export default Future;