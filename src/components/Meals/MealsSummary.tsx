import Image from "next/image";
import classes from "./MealsSummary.module.css";
import Button from "../UI/Button";

const handleClick = () => {};

const MealsSummary = () => {
  return (
    <>
      <Image
        src="/img/yomogi-flower.png"
        alt="Wormwood leaves and purple flower"
        className={classes.backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <section className={classes.summary}>
        <h2>Welcome to Ristorante YoMogi</h2>
        <div className={classes.paragraph}>
          <p>
            This is a private Japanese-Fusion Gastropub in a small rural
            neighborhood on Hawaii Big Island.
          </p>
        </div>
        <div className={classes.paragraph}>
          <p>
            The name comes from when the chef, Morgan O&#39;Shaughnessey, was
            first learning how to speak Japanese. It happened, as most
            epiphanies in this neck of the woods do, at the KTA Superstore in
            Hilo (Puainako, of course...). A small beautifully-wrapped mochi
            with an unforgettable name caught the chef&#39;s eye as he was
            trying to come to a decision on which tasty flavor to take home that
            day. &#34;Yomogi&#34;...WHAAT? That one literally has my name on
            it...and just said hi &#34;(sorta)&#34;!
          </p>
        </div>
        <div className={classes.paragraph}>
          <p>
            Fusing that final inspiration with his three year&#39;s training as
            a wok chef, 5 years of homebrew experience, and lifelong love of
            serving good food to great friends...Morgan created this food order
            app to go with the restaurant that he&#39;s building in his garage
            as a birthday present for Patron Number 1, Calisama!
          </p>
        </div>
        <Button link={"/"} onClick={handleClick} className={classes.button}>
          Return to Menu
        </Button>
      </section>
    </>
  );
};

export default MealsSummary;
