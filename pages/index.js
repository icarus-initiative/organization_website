import Head from 'next/head';
import About from '../src/About';
import Banner from '../src/Banner';
import FAQ from '../src/FAQ';
import Footer from '../src/Footer';
import Projects from '../src/Projects';
import SiteNav from '../src/SiteNav';
import Squadrons from '../src/Squadrons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Icarus Initiative</title>
      </Head>

      <SiteNav />
      <Banner />
      <About />
      <Squadrons />
      <Projects />
      <FAQ />
      <Footer />
    </>
  );
}
