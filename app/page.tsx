import About from '../components/About';
import Contact from '../components/Contact';
import Divider from '../components/Divider';
import Experience from '../components/Experience';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center px-4 overflow-x-hidden max-w-full'>
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
