import Image from 'next/image';
import Value from './values_component';
import Headline from './headline_component';

const headName = { japanese: '価値観', english: 'VALUES' };

const valueList = [
  { src: '/introduction/value1.png', alt: 'value1', name: '価値観01' },
  { src: '/introduction/value2.png', alt: 'value2', name: '価値観02' },
  { src: '/introduction/value3.png', alt: 'value3', name: '価値観03' },
];

const Values = () => {
  return (
    <div id='values' className=''>
      <div className='w-5/6 laptop_l:w-2/3 mx-auto bg-white -mb-96 laptop_l:-mb-72'>
        <div className='text-center mb-6 laptop_l:mb-12'>
          <Headline japanese={headName.japanese} english={headName.english} />
        </div>
        <div className='bg-white'>
          <div className='flex flex-wrap text-center bg-white'>
            <div className='laptop_l:w-1/3 h-auto px-8 laptop_l:border-r-2 laptop_l:border-green-line bg-white'>
              <Value src={valueList[0].src} alt={valueList[0].alt} name={valueList[0].name} />
            </div>
            <div className='laptop_l:w-1/3 h-auto px-8 laptop_l:border-r-2 laptop_l:border-green-line bg-white'>
              <Value src={valueList[1].src} alt={valueList[1].alt} name={valueList[1].name} />
            </div>
            <div className='laptop_l:w-1/3 h-auto px-8 bg-white'>
              <Value src={valueList[2].src} alt={valueList[2].alt} name={valueList[2].name} />
            </div>
          </div>
          <div className='hidden relative z-10 laptop_l:block laptop_l:h-10 bg-white rounded-b-lg'></div>
        </div>
      </div>
    </div>
  );
};

export default Values;
