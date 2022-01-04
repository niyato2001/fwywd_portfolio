import React from 'react';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p className='font-semibold tracking-wider text-justify text-green-font'>
          {this.props.name}
        </p>
        <div className='flex items-center'>
          <div className='w-full h-3.5 bg-green-prolight rounded'>
            <div className='w-2/5 h-3.5 bg-green-prodark rounded-l'></div>
          </div>
          <span className='mx-4 tracking-wider text-green-font'>{this.props.percent}</span>
        </div>
      </div>
    );
  }
}
