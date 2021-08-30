import Head from 'next/head';
import About from '../src/About';
import Banner from '../src/Banner';
import FAQ from '../src/FAQ';
import Footer from '../src/Footer';
import Process from '../src/Process';
import Navigation from '../src/Navigation';
import Squadrons from '../src/Squadrons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Icarus Initiative</title>
      </Head>

      <Navigation />
      <Banner />
      <About />
      <Squadrons />
      <FAQ />
      <Process />
      <Footer />
    </>
  );
}
