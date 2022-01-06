import Image from 'next/image';
import About from './About';
import Future from './Future';
import Hero from './Hero';
import Skills from './Skills';
import Values from './Values';

export default function PageMain() {
  return (
    <div className='w-full'>
      <Hero />
      <About />
      <Skills />
      <Values />
      <Future />
    </div>
  );
}
