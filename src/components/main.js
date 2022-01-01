import Image from 'next/image';
import About from './main_about';
import Future from './main_future';
import Skills from './main_skills';
import Title from './main_title';
import Values from './main_values';

const Main = () => (
  <div className='w-full'>
    <Title />
    <About />
    <Skills />
    <Values />
    <Future />
  </div>
);

export default Main;
