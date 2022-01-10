import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  alt: string;
  name: string;
}

export default class ValueItems extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Image src={this.props.src} alt={this.props.alt} width={200} height={200} quality={100} />
        <p className='py-5 text-lg font-extrabold tracking-wider'>{this.props.name}</p>
        <div className='items-center text-sm tracking-widest leading-loose text-left text-black-font'>
          <p className='pb-5 laptop_l:pb-0'>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    );
  }
}
