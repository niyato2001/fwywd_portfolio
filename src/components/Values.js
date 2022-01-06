import Image from 'next/image';
import Headline from './Headline';
import ValueItems from './ValueItems';

const headName = { japanese: '価値観', english: 'VALUES' };

const valueList = [
  { src: '/introduction/value1.png', alt: 'value1', name: '価値観01' },
  { src: '/introduction/value2.png', alt: 'value2', name: '価値観02' },
  { src: '/introduction/value3.png', alt: 'value3', name: '価値観03' },
];

export default function Values() {
  return (
    <div id='values' className=''>
      <div className='mx-auto -mb-96 w-5/6 bg-white laptop_l:-mb-72 laptop_l:w-2/3'>
        <div className='mb-6 text-center laptop_l:mb-12'>
          <Headline japanese={headName.japanese} english={headName.english} />
        </div>
        <div className='bg-white'>
          <div className='flex flex-wrap text-center bg-white'>
            <div className='px-8 h-auto bg-white laptop_l:w-1/3 laptop_l:border-r-2 laptop_l:border-green-line'>
              <ValueItems src={valueList[0].src} alt={valueList[0].alt} name={valueList[0].name} />
            </div>
            <div className='px-8 h-auto bg-white laptop_l:w-1/3 laptop_l:border-r-2 laptop_l:border-green-line'>
              <ValueItems src={valueList[1].src} alt={valueList[1].alt} name={valueList[1].name} />
            </div>
            <div className='px-8 h-auto bg-white laptop_l:w-1/3'>
              <ValueItems src={valueList[2].src} alt={valueList[2].alt} name={valueList[2].name} />
            </div>
          </div>
          <div className='hidden relative z-10 bg-white rounded-b-lg laptop_l:block laptop_l:h-10'></div>
        </div>
      </div>
    </div>
  );
}
