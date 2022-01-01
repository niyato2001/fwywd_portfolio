import Link from 'next/link';
import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='table-cell px-2 h-10 hover:bg-green-prolight laptop_l:px-5 laptop_l:h-24 duration-1000'>
        <Link href={this.props.link}>
          <a className='block h-10 py-2 laptop_l:h-24 laptop_l:py-8'>{this.props.name}</a>
        </Link>
      </div>
    );
  }
}

export default List;
