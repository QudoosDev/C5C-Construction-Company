import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-gray-900 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Projects />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
