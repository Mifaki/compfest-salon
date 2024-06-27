import Image from 'next/image';
import { type IAsideImage } from '~/shared/models/heroasideinterfaces';

const HeroAside = ({ image }: { image: IAsideImage[] }) => {
  return (
    <aside className="flex flex-col gap-4">
      {image.map((item, index) => (
        <div key={index + 1} className="relative size-[120px] overflow-hidden">
          <Image src={item.src} alt={item.alt} fill />
        </div>
      ))}
    </aside>
  );
};

export default HeroAside;
