import React from 'react';

class Headline extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className='inline w-1/2 text-black-font text-3xl font-bold align-middle tracking-widest font-mono'>
          {this.props.japanese}
        </h1>
        <p className='inline w-1/2 text-green-font font-semibold ml-3 align-middle tracking-wider'>
          {this.props.english}
        </p>
      </div>
    );
  }
}

export default Headline;
