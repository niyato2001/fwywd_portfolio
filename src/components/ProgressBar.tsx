import React from 'react';

interface Props {
  name: string;
  percent: string;
}

export default function ProgressBar(props: Props): JSX.Element {
  return (
    <div>
      <p className='font-semibold tracking-wider text-justify text-green-font'>{props.name}</p>
      <div className='flex items-center'>
        <div className='w-full h-3.5 bg-green-prolight rounded'>
          <div className='w-2/5 h-3.5 bg-green-prodark rounded-l'></div>
        </div>
        <span className='mx-4 tracking-wider text-green-font'>{props.percent}</span>
      </div>
    </div>
  );
}
