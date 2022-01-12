import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  alt: string;
  name: string;
}

export default function ValueItems(props: Props): JSX.Element {
  return (
    <div>
      <Image src={props.src} alt={props.alt} width={200} height={200} quality={100} />
      <p className='py-5 text-lg font-extrabold tracking-wider'>{props.name}</p>
      <div className='items-center text-sm tracking-widest leading-loose text-left text-black-font'>
        <p className='pb-5 laptop_l:pb-0'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </div>
  );
}
