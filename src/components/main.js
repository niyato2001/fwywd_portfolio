import Image from 'next/image';
import Hero from './Hero';
import About from './main_about';
import Future from './main_future';
import Skills from './main_skills';
import Values from './main_values';

const Main = () => (
  <div className='w-full'>
    <Hero />
    <About />
    <Skills />
    <Values />
    <Future />
  </div>
);

export default Main;
