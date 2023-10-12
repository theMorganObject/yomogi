import Image from "next/image";
import AboutDetail from "../../components/Page-Components/AboutDetail";
import classes from "./page.module.css";

export default function About() {
  return (
    <section className={classes.container}>
      <Image
        src="/img/palette-1.png"
        alt="Wormwood leaves and purple flower"
        className={classes.backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className={classes.title}>YoMogi</h1>
      <p className={classes.subtitle}>Japanese-Fusion Gastropub</p>
      <AboutDetail />;
    </section>
  );
}
