import { type IService } from '~/shared/models/serviceInterfaces';
import AboutUsSection from './section/AboutUsSection';
import HeroSection from './section/HeroSection';
import OurBranchSection from './section/OurBranchSection';
import OurGallerySection from './section/OurGallerySection';
import OurServiceSection from './section/OurServiceSection';

interface ILandingContainer {
  services: IService[];
}

const LandingContainer = ({ services }: ILandingContainer) => {
  return (
    <main className="container h-full w-full space-y-20 pb-10">
      <HeroSection />
      <AboutUsSection />
      <OurServiceSection services={services} />
      <OurBranchSection />
      <OurGallerySection />
    </main>
  );
};

export default LandingContainer;
