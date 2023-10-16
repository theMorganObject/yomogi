import Image from "next/image";
import AboutDetail from "../../components/Page-Components/AboutDetail";
import css from "./page.module.css";

export default function About() {
  return (
    <section className={css.container}>
      <Image
        src="/img/palette-1.png"
        alt="Wormwood leaves and purple flower"
        className={css.backgroundImage}
        height={400}
        width={400}
      />
      <h1 className={css.title}>YoMogi</h1>
      <p className={css.subtitle}>Japanese-Fusion Gastropub</p>
      <AboutDetail />;
    </section>
  );
}
