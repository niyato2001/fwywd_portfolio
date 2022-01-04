import Image from 'next/image';
import AboutComponent from './about_component';
import Headline from './headline_component';

const headName = { japanese: '私について', english: 'ABOUT' };
const AboutList = [
  { src: '/introduction/about-1.png', alt: 'About1', width: 184, height: 157, name: '趣味' },
  {
    src: '/introduction/about-2.png',
    alt: 'About2',
    width: 206,
    height: 158,
    name: '好きな食べ物',
  },
  { src: '/introduction/about-3.png', alt: 'About3', width: 245, height: 149, name: '性格' },
];

export default function About() {
  return (
    <div id='about' className='bg-center bg-cover laptop_l:bg-about-bg'>
      <div className='py-5 mx-auto w-72 text-center laptop_l:py-20'>
        <Headline japanese={headName.japanese} english={headName.english} />
      </div>
      <div className='flex flex-wrap items-end mx-auto w-2/3 h-auto text-center'>
        {AboutList.map((AboutItem, index) => {
          return (
            <AboutComponent
              src={AboutItem.src}
              alt={AboutItem.alt}
              width={AboutItem.width}
              height={AboutItem.height}
              name={AboutItem.name}
              key={index}
            />
          );
        })}
      </div>
      <div className='h-20 laptop_l:h-24'></div>
    </div>
  );
}
