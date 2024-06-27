import ServiceCard from '../card/ServiceCard';

const OurServiceSection = () => {
  return (
    <section>
      <h2 className="mb-5 text-right text-heading-3 font-medium text-sea-brown">
        Our Services
      </h2>
      <div className="flex flex-wrap items-center justify-between">
        <ServiceCard
          thumbnail_url="https://utfs.io/f/cc0b5875-f5b2-4ee7-acda-2fc70a3c80a6-5g2eq7.png"
          title="Haircuts and Styling"
          description="lorem ipsum dolor sit amet, consectetur adipis"
        />
        <ServiceCard
          thumbnail_url="https://utfs.io/f/fdad5a8b-1b59-459c-96d7-a14d0eb03bcf-25q5tg.png"
          title="Manicure and Pedicure"
          description="lorem ipsum dolor sit amet, consectetur adipis"
        />
        <ServiceCard
          thumbnail_url="https://utfs.io/f/ddc0d6b7-e166-421b-ad82-86367bdb8634-l7d48k.png"
          title="Facial Treatments"
          description="lorem ipsum dolor sit amet, consectetur adipis"
        />
      </div>
    </section>
  );
};

export default OurServiceSection;
