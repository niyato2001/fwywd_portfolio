import Image from 'next/image';
import React from 'react';

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='items-center p-4 w-full laptop_l:w-1/3'>
        <Image
          src={this.props.src}
          alt={this.props.alt}
          width={this.props.width}
          height={this.props.height}
          quality={100}
        />
        <p className='my-3 text-2xl font-extrabold text-green-font laptop_l:my-7'>
          {this.props.name}
        </p>
        <p className='text-sm tracking-wider leading-loose text-left text-black-font'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    );
  }
}

export default AboutComponent;
