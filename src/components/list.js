import Link from 'next/link';
import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className='mx-5'>
        <Link href={this.props.link}>
          <a>{this.props.name}</a>
        </Link>
      </li>
    );
  }
}

export default List;
