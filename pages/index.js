import Head from 'next/head';
import About from '../src/About';
import Banner from '../src/Banner';
import FAQ from '../src/FAQ';
import Footer from '../src/Footer';
import Process from '../src/Process';
import Navigation from '../src/Navigation';
import Helm from '../src/Helm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Icarus Initiative</title>
      </Head>

      <Navigation />
      <Banner />
      <About />
      <Helm />
      <Process />
      <FAQ />
      <Footer />
    </>
  );
}
