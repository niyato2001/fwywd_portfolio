import Image from 'next/image'

const Future = () => (
    <div id="future" className="h-auto w-full bg-future bg-cover">
        <div className="h-96"></div>
        <div className="h-auto"></div>
        <div className="w-2/3 mx-auto pb-11 text-center flex">
            <div className="pr-5 w-1/2 h-auto items-end">
                <div className='items-center'>
                    <h2 className="inline mx-4">3年後にやりたいこと</h2>
                    <p className='inline mx-4'>Future</p>
                </div>
                <div className='mt-5 leading-loose items-center text-sm'>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキスト
                    </p>
                </div>
            </div>
            <div classNmae="items-end">
                <div className="pl-5">
                <Image src="/introduction/future.png" alt="3年後" width={500} height={250} />
                </div>
            </div>
        </div>
    </div>

);
    
export default Future;