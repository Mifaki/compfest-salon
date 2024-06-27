import { Button } from 'antd';
import Image from 'next/image';
import SeaSalonIcon from '~/shared/container/icon/SeaSalonIcon';
import HeroAside from '../group/HeroAside';
import { HEROASIDE_DATA } from '~/app/models/HeroAsideImage';

const HeroSection = () => {
  return (
    <section className="relative flex h-[calc(100vh-80px)] items-end justify-between">
      <div className="relative h-full w-[30%] overflow-hidden">
        <Image
          src={
            'https://utfs.io/f/72572a7a-3dd3-41b6-928d-d3dea3318740-k6t142.png'
          }
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="mb-3 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <SeaSalonIcon />
          <h2 className="text-heading-3 font-semibold text-sea-brown">
            Beauty and Elegance Redefined
          </h2>
        </div>
        <Button className="h-12 w-full rounded-none border-2 border-sea-brown bg-sea-cream px-6 py-3 text-body-2 font-medium text-sea-brown">
          Our Services
        </Button>
      </div>
      <HeroAside image={HEROASIDE_DATA} />
    </section>
  );
};

export default HeroSection;
