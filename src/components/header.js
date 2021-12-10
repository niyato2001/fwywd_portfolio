import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
    <div>
        <div className="overflow-hidden w-full h-24">
            <div className="float-left">
                <Image src="/logo.png" alt="Head log" width={192} height={96} />
            </div>

            <div className="float-right">
                <ul  className="text-green-font h-24 flex items-center">
                <li className="mx-2">
                <Link href="#about">
                    <a className="">ABOUT</a>
                </Link>
                </li>
                <li className="mx-2">
                <Link href="#skills">
                    <a className="">SKILLS</a>
                </Link>
                </li>
                <li className="mx-2">
                <Link href="#values">
                    <a className="">VALUES</a>
                </Link>
                </li>
                <li className="mx-2">
                <Link href="#future">
                    <a className="">FUTURE</a>
                </Link>
                </li>
                </ul>
            </div> 
        </div>
        <div className="bg-green-bg w-full h-auto overflow-hidden">
                <div className="float-left px-24 py-60 align-middle ">
                    <h1 className="text-white text-4xl">
                        遠隔型皮膚外用薬案内システム（仮）
                     </h1>
                        <h2 className="text-green-prolight text-2xl py-2">
                            セルフメディケーションを加速する
                        </h2>
                </div>
                <div className="float-right px-12 py-12">
                    <Image src="/hero.png" alt="header" width={560} height={480}/>
                </div>
            
        </div>      
    </div>
    );

export default Header;