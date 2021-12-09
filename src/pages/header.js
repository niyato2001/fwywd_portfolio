import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

function indexPage(){
    return(
        <div>
            <div id="container" absolute left-0 top-0 h-16 w-16>
                <Image src="/logo.png" alt="Head log" width={200} height={100}/>
            </div>
                <Link href="#about">
                    <a>ABOUT</a>
                </Link>
                <Link href="#skills">
                    <a>SKILLS</a>
                </Link>
                <Link href="#values">
                    <a>VALUES</a>
                </Link>
                <Link href="#future">
                    <a>FUTURE</a>
                </Link>   
        </div>
    )
};

export default indexPage;