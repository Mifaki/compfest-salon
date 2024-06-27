import React from 'react';
import HeroSection from './section/HeroSection';
import AboutUsSection from './section/AboutUsSection';
import OurServiceSection from './section/OurServiceSection';
import OurBranchSection from './section/OurBranchSection';
import OurGallerySection from './section/OurGallerySection';

const LandingContainer = () => {
  return (
    <main className="container h-full w-full space-y-20 pb-10">
      <HeroSection />
      <AboutUsSection />
      <OurServiceSection />
      <OurBranchSection />
      <OurGallerySection />
    </main>
  );
};

export default LandingContainer;
