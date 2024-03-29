import React from 'react';

interface Props {
  japanese: string;
  english: string;
}

export default function Headline(props: Props): JSX.Element {
  return (
    <div>
      <h1 className='w-full font-mono text-2xl font-bold tracking-widest text-center text-black-font align-middle laptop_l:inline laptop_l:w-1/2'>
        {props.japanese}
      </h1>
      <h2 className='w-full font-semibold tracking-wider text-center text-green-font align-middle laptop_l:inline laptop_l:ml-3 laptop_l:w-1/2'>
        {props.english}
      </h2>
    </div>
  );
}
