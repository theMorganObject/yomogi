import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface BackgroundProps {
  image: StaticImageData | string;
}
export default function Background({ image }: BackgroundProps) {
  return (
    <Image
      alt='Light green wormwood leaves background'
      src={image}
      quality={100}
      fill
      sizes='100vw'
      style={{
        objectFit: 'cover',
        zIndex: -2,
        opacity: 0.3,
        minHeight: '100vh',
      }}
    />
  );
}
