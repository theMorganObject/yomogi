import Image from 'next/image';
import Link from 'next/link';

export default function YoMogi() {
  return (
    <Link href='/about'>
      <Image
        src='/yomogi-icon.svg'
        alt='YoMogi icon'
        height={106}
        width={65}
        priority
        style={{
          transform: 'translateY(0.9rem)',
          filter: 'drop-shadow(1.2px 2.1px 3.5px var(--yomogi-11))',
        }}
      />
    </Link>
  );
}
