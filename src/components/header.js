import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
        <div>
            <div>
                <Image src="/logo.png" alt="Head log" width={200} height={100} float-left/>
            </div>

            <div>
                <ul  style-none>
                <li float-right>
                <Link href="#about">
                    <a>ABOUT</a>
                </Link>
                </li>
                <li>
                <Link href="#skills">
                    <a>SKILLS</a>
                </Link>
                </li>
                <li>
                <Link href="#values">
                    <a>VALUES</a>
                </Link>
                </li>
                <li>
                <Link href="#future">
                    <a>FUTURE</a>
                </Link>
                </li>
                </ul>
            </div>       
        </div>
    );

export default Header;