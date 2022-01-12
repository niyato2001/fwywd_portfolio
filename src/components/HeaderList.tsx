import Link from 'next/link';
import React from 'react';
import { Link as Scroll } from 'react-scroll';

interface Props {
  link: string;
  name: string;
}

export default function HeaderList(props: Props): JSX.Element {
  return (
    <div className='table-cell px-2 h-10 hover:bg-green-prolight duration-1000 laptop_l:px-5 laptop_l:h-24'>
      <Scroll to={props.link} smooth={true} className='block py-2 h-10 laptop_l:py-8 laptop_l:h-24'>
        {props.name}
      </Scroll>
    </div>
  );
}
