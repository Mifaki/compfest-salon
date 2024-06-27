import Image from 'next/image';

const OurGallerySection = () => {
  return (
    <section>
      <h2 className="mb-5 text-right text-heading-3 font-medium text-sea-brown">
        Our Services
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative h-[360px] w-full overflow-hidden">
          <Image
            src="https://utfs.io/f/8d643f2d-fa4d-4511-a32f-13440a203069-5a920m.png"
            alt="Galery Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[360px] w-full overflow-hidden">
          <Image
            src="https://utfs.io/f/7f1e6605-144d-4c6e-911b-a3dae8f5c4e2-5a920n.png"
            alt="Galery Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative col-span-2 h-[360px] w-full overflow-hidden">
          <Image
            src="https://utfs.io/f/a2ba7820-c388-4da5-8596-d5359ab7de1d-5a920o.png"
            alt="Galery Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurGallerySection;
