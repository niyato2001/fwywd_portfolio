import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  name: string;
}

export default function AboutItems(props: Props): JSX.Element {
  return (
    <div className='items-center p-4 w-full laptop_l:w-1/3'>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        quality={100}
      />
      <p className='my-3 text-2xl font-extrabold text-green-font laptop_l:my-7'>{props.name}</p>
      <p className='text-sm tracking-wider leading-loose text-left text-black-font'>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}
