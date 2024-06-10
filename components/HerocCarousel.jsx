import Image from "next/image";

const images = [
  {
    name: 'united-nations',
    url: '/united-nations-logo.png'
  },
  {
    name: 'world-vision',
    url: '/world-vision-logo.png'
  },
  {
    name: 'irc',
    url: '/irc-logo.png'
  },
  {
    name: 'who',
    url: '/who-logo.png'
  },
  {
    name: 'amref',
    url: '/amref-logo.png'
  },
  {
    name: 'global-fund',
    url: '/global-fund-logo.png'
  },
  {
    name: 'moh',
    url: '/moh-logo.png'
  },
  {
    name: 'core-group',
    url: '/core-group-logo.png'
  },
];

const HeroCarousel = () => {
  return (
    <div className="md:grid hidden py-8 w-full gap-4 px-16">
      <div className="grid grid-cols-8 gap-8 items-center">
        {images.map((image, index) => (
            <Image
            key={index}
            src={image.url}
            alt={image.name}
            width={200}
            height={200}
            style={{ objectFit: 'contain' }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
