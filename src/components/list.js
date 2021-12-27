import Link from 'next/link';
import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='inline mx-2 laptop_l:mx-5'>
        <Link href={this.props.link}>
          <a>{this.props.name}</a>
        </Link>
      </div>
    );
  }
}

export default List;
