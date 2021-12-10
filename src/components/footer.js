import Image from 'next/image';


const Footer = () => (
        <div className="bg-black text-center w-full h-auto text-white">
            <div>
                    <div className="items-center ml-auto mr-auto my-10 tracking-wide">
                        <span className="text-xs mx-1">CREATED BY</span>
                        <span className="mx-1 font-bold">田原 純平</span>
                    </div>

            </div>
            <div className="my-3">
                <Image src="/introduction/logo_white.png" width={120} height={144} />
            </div>
            <div>
                <div className="items-center ml-auto mr-auto my-8">
                     <div className="inline mx-2">
                          <Image src="/introduction/twitter.png" width={24} height={20} />
                     </div>
                     <div className="inline mx-2">
                          <Image src="/introduction/facebook.png" width={20} height={20} />
                     </div>
                </div>
            </div>
            <div>
                    <p className="tracking-wider mb-16">© 2021 KIKAGAKU</p>
            </div>
            
        </div>
    );

export default Footer;