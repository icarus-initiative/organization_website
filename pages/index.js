import Head from 'next/head';
import Navigation from '../src/Navigation';
import Banner from '../src/Banner';
import About from '../src/About';
import Enlist from '../src/Enlist';
import Helm from '../src/Helm';
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
      <Banner />
      <About />
      <Helm />
      <Process />
      <Enlist />
      <FAQ />
      <Footer />
    </>
  );
}
