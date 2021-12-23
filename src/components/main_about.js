import Image from 'next/image';
import Headline from './headline_component';
import Aboutcomponent from './about_component';

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

const About = () => (
  <div id='about' className='bg-about-bg bg-cover'>
    <div className='w-72 py-20 mx-auto text-center'>
      <Headline japanese={headName.japanese} english={headName.english} />
    </div>
    <div className='w-2/3 h-96 flex mx-auto items-end text-center'>
      {AboutList.map((AboutItem, index) => {
        return (
          <Aboutcomponent
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
    <div className='h-24'></div>
  </div>
);

export default About;
