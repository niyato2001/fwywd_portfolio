import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p className='text-green-font font-semibold tracking-wider text-justify'>
          {this.props.name}
        </p>
        <div className='flex items-center'>
          <div className='w-full h-3.5 bg-green-prolight rounded'>
            <div className='h-3.5 bg-green-prodark w-2/5 rounded-l'></div>
          </div>
          <span className=' text-green-font tracking-wider mx-4'>{this.props.percent}</span>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
