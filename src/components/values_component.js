import Image from 'next/image';
import React from 'react';

class Value extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Image src={this.props.src} alt={this.props.alt} width={200} height={200} />
        <p className='py-5 text-extrabold tracking-wider text-lg'>{this.props.name}</p>
        <div className='text-black-font leading-loose items-center text-sm tracking-widest text-left'>
          <p className=''>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    );
  }
}

export default Value;
