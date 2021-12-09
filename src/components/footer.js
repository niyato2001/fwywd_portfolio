import Image from 'next/image';


const Footer = () => {
    return (
        <div className="bg-black text-center w-full h-100">
            <div className="text-white">
                    <div>
                        <p className="text-xs float-left">CREATED BY</p>
                        <p className="float-none">田原 純平</p>
                    </div>

            </div>
            <div className="footerLogo">
                <Image src="/introduction/logo_white.png" width={100} height={100} />
            </div>
            <div className="snsLogo">
                <div className="float-left">
                    <Image src="/introduction/twitter.png" width={30} height={30} />
                </div>
                <div className="float-none">
                    <Image src="/introduction/facebook.png" width={30} height={30} />
                </div>
                <div className="text-white">
                    <p>© 2021 KIKAGAKU</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;