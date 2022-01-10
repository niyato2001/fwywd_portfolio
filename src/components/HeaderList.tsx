import Link from 'next/link';
import React from 'react';
import { Link as Scroll } from 'react-scroll';

interface Props {
  link: string;
  name: string;
}

export default class HeaderList extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='table-cell px-2 h-10 hover:bg-green-prolight duration-1000 laptop_l:px-5 laptop_l:h-24'>
        <Scroll
          to={this.props.link}
          smooth={true}
          className='block py-2 h-10 laptop_l:py-8 laptop_l:h-24'
        >
          {this.props.name}
        </Scroll>
      </div>
    );
  }
}
