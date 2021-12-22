import Image from 'next/image';
import Value from './values_component';

const valueList = [
  { src: '/introduction/value1.png', alt: 'value1', name: '価値観01' },
  { src: '/introduction/value2.png', alt: 'value2', name: '価値観02' },
  { src: '/introduction/value3.png', alt: 'value3', name: '価値観03' },
];

const Values = () => {
  return (
    <div id='values' className=''>
      <div className='w-2/3 mx-auto bg-white -mb-72'>
        <div className='text-center py-12 mb-10'>
          <h2
            id='values'
            className='text-black-font inline font-extrabold mr-4 text-3xl align-middle tracking-widest font-mono'
          >
            価値観
          </h2>
          <p className='inline mx-4 text-lg align-middle text-bold text-green-font'>VALUES</p>
        </div>
        <div className='bg-white'>
          <div className='flex text-center bg-white'>
            <div className='w-1/3 h-auto px-8 border-r-2 border-green-line bg-white'>
              <Value src={valueList[0].src} alt={valueList[0].alt} name={valueList[0].name} />
            </div>
            <div className='w-1/3 h-auto px-8 border-r-2 border-green-line bg-white'>
              <Value src={valueList[1].src} alt={valueList[1].alt} name={valueList[1].name} />
            </div>
            <div className='w-1/3 h-auto px-8 bg-white'>
              <Value src={valueList[2].src} alt={valueList[2].alt} name={valueList[2].name} />
            </div>
          </div>
          <div className='relative z-10 h-10 bg-white rounded-b-lg'></div>
        </div>
      </div>
    </div>
  );
};

export default Values;
