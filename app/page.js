import Head from 'next/head';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import Features from './components/Features';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FT Learning</title>
        <meta name="description" content="Become a professional in your sector with FT Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <Partners />
      <Features />
      <WhyChooseUs/>
      <Mentors />
      <Testimonials />
      <Footer />
    </div>
  );
}
