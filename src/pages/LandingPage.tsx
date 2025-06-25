
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import ProductCarousel from '@/components/ProductCarousel';
import Testimonials from '@/components/Testimonials';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <ProductCarousel />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
