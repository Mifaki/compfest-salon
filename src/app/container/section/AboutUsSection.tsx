import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section>
      <h2 className="mb-5 text-heading-3 font-medium text-sea-brown">
        About Us
      </h2>
      <div className="flex items-start justify-between">
        <div className="w-[75%]">
          <p>
            At SEA Salon, we&apos;re more than just a beauty destination -
            we&apos;re a rising star in the salon industry, known for our
            exceptional services and glowing reviews. Our rapidly growing
            clientele is a testament to our commitment to excellence and
            innovation. Recognizing our customers&apos; needs, we&apos;ve
            developed the SEA Salon Application, a user-friendly platform that
            allows you to easily browse our services, choose your preferred
            stylist, and book appointments with just a few taps. Our team of
            skilled professionals is dedicated to providing personalized,
            top-tier beauty experiences, whether you&apos;re looking for a quick
            touch-up or a complete makeover. At SEA Salon, we blend traditional
            expertise with modern convenience, ensuring that your journey to
            beauty is as seamless and enjoyable as possible. Step into our
            welcoming space and let us help you look and feel your absolute
            best.
          </p>
        </div>
        <div className="relative h-[350px] w-[20%] overflow-hidden">
          <Image
            src="https://utfs.io/f/4f15b68c-3325-44a8-a995-bbf510fd68f3-1j4zgt.png"
            alt="About Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
