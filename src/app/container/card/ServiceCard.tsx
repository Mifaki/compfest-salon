'use client';

import Image from 'next/image';
import { Typography } from 'antd';

const { Paragraph } = Typography;

type IServeCard = {
  thumbnail_url: string;
  title: string;
  description: string;
};

const ServiceCard = ({ thumbnail_url, title, description }: IServeCard) => {
  return (
    <div className="group relative h-[480px] w-[25%] overflow-hidden">
      <Image
        src={thumbnail_url}
        alt={`${title} Image`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 p-4 opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70 group-hover:opacity-100">
        <h4 className="mb-2 text-center text-heading-4 font-medium text-white">
          {title}
        </h4>
        <Paragraph className="text-center text-white">{description}</Paragraph>
      </div>
    </div>
  );
};

export default ServiceCard;
