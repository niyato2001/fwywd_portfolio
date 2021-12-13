import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
    <div>
        <div className="overflow-hidden w-full h-24">
            <div className="float-left">
                <Image src="/introduction/logo.png" alt="Head log" width={192} height={96} />
            </div>

            <div className="float-right mr-2">
                <ul  className="text-green-font h-24 flex items-center font-bold tracking-wider text-lg">
                <li className="mx-5">
                <Link href="#about">
                    <a className="">ABOUT</a>
                </Link>
                </li>
                <li className="mx-5">
                <Link href="#skills">
                    <a className="">SKILLS</a>
                </Link>
                </li>
                <li className="mx-5">
                <Link href="#values">
                    <a className="">VALUES</a>
                </Link>
                </li>
                <li className="mx-5">
                <Link href="#future">
                    <a className="">FUTURE</a>
                </Link>
                </li>
                </ul>
            </div> 
        </div>
        <div className="bg-green-bg w-full h-auto   flex items-center">
                <div className="ml-10 justify-start">
                    <h1 className="text-white text-4xl">
                        遠隔型皮膚外用薬案内システム（仮）
                     </h1>
                        <h2 className="text-green-prolight text-2xl py-2">
                            セルフメディケーションを加速する
                        </h2>
                </div>
                <div className="ml-auto mr-12 py-12">
                    <Image src="/introduction/hero.png" alt="header" width={560} height={480}/>
                </div>
            
        </div>      
    </div>
    );

export default Header;
