import React from 'react';

class Headline extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className='laptop_l:inline laptop_l:w-1/2 w-full text-black-font text-2xl font-bold align-middle tracking-widest font-mono box text-center'>
          {this.props.japanese}
        </h1>
        <p className='laptop_l:inline laptop_l:w-1/2 w-full text-green-font font-semibold laptop_l:ml-3 align-middle tracking-wider box text-center'>
          {this.props.english}
        </p>
      </div>
    );
  }
}

export default Headline;
