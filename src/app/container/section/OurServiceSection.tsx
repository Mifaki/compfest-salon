import { type IService } from '~/shared/models/serviceInterfaces';
import ServiceCard from '../card/ServiceCard';

const OurServiceSection = ({ services }: { services: IService[] }) => {
  return (
    <section>
      <h2 className="mb-5 text-right text-heading-3 font-medium text-sea-brown">
        Our Services
      </h2>
      <div className="flex flex-wrap items-center justify-between">
        {services.map((item) => (
          <ServiceCard
            key={item.id}
            thumbnail_url={item.thumbnail_uri}
            title={item.name}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServiceSection;
