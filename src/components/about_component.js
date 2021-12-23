import React from 'react';
import react from 'react';
import Image from 'next/image';

class Aboutcomponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='w-1/3 items-center px-4'>
        <Image
          src={this.props.src}
          alt={this.props.alt}
          width={this.props.width}
          height={this.props.height}
        />
        <p className='text-green-font text-2xl font-extrabold my-7'>{this.props.name}</p>
        <p className='text-black-font tracking-wider text-sm leading-loose text-left'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    );
  }
}

export default Aboutcomponent;