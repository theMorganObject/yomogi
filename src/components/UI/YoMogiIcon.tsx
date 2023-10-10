import Image from "next/image";
import Link from "next/link";

export default function YoMogi() {
  return (
    <Link href="/about">
      <Image
        src="/yomogi-icon.svg"
        alt="YoMogi icon"
        height={120}
        width={120}
        style={{ transform: "translateY(1.1rem)" }}
      />
    </Link>
  );
}
