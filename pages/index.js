import Head from 'next/head';
import Navigation from '../src/Navigation';
import About from '../src/About';
import Enlist from '../src/Enlist';
import Helm from '../src/Helm';
import Hero from '../src/Hero';
import Plans from '../src/Plans';
import Process from '../src/Process';
import FAQ from '../src/FAQ';
import Footer from '../src/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Icarus Initiative</title>
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </Head>

      <Navigation />
      <Hero />
      <About />
      <Plans />
      <Helm />
      <Process />
      <Enlist />
      <FAQ />
      <Footer />
    </>
  );
}
