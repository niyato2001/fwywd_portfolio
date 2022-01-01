import Image from 'next/image';
import React from 'react';

class Aboutcomponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='w-full laptop_l:w-1/3 items-center p-4'>
        <Image
          src={this.props.src}
          alt={this.props.alt}
          width={this.props.width}
          height={this.props.height}
          quality={100}
        />
        <p className='text-green-font text-2xl font-extrabold my-3 laptop_l:my-7'>
          {this.props.name}
        </p>
        <p className='text-black-font tracking-wider text-sm leading-loose text-left'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    );
  }
}

export default Aboutcomponent;
