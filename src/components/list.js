import Link from 'next/link';
import React from 'react';
import { Link as Scroll } from 'react-scroll';

export default class List extends React.Component {
  constructor(props) {
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
