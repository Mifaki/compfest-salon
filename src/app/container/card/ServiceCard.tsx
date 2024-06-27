import Image from 'next/image';
import React from 'react';

type IServeCard = {
  thumbnail_url: string;
  title: string;
  description: string;
};

const ServiceCard = ({ thumbnail_url, title, description }: IServeCard) => {
  return (
    <div className="relative h-[480px] w-[25%] overflow-hidden">
      <Image
        src={thumbnail_url}
        alt={`${title} Image`}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default ServiceCard;
