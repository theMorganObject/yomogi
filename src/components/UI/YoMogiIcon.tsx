// import Image from "next/image";
import Link from "next/link";

export default function YoMogi() {
  return (
    <Link href="/about">
      <img
        // TODO re-upgrade this to the Next image component when solution for console css width warning
        src="/yomogi-icon.svg"
        alt="YoMogi icon"
        // priority
        // layout="responsive"
        height={65}
        width={65}
        style={{
          // maxWidth: "100%",
          // height: "auto",
          transform: "translateY(0.9rem)",
          filter: "drop-shadow(1.2px 2.1px 3.5px var(--yomogi-11))",
        }}
      />
    </Link>
  );
}
