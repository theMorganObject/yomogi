import classes from "./AboutDetail.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const handleClick = () => {};

const AboutDetail = () => {
  return (
    <Card>
      <section className={classes.summary}>
        <div className={classes.paragraph}>
          <p>
            This is a private Japanese-Fusion Gastropub in a small rural
            neighborhood on Hawaii Big Island. It is run as a labor of love for
            family and friends, so that they may enjoy daily healthy, tasty,
            interesting, and fun home-cooked food. The goal is to show how easy
            it is to make restaurant-quality meals at home for cheap with
            nothing more than a wok, some practice, and a commitment to being
            organized.
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
            it...and just said &#34;hi&#34;!
          </p>
        </div>
        <div className={classes.paragraph}>
          <p>
            Fusing that final inspiration with his three year&#39;s training as
            a wok chef, 5 years of homebrew experience, and lifelong love of
            serving good food to great friends...Morgan created this food order
            app to go with the restaurant that he&#39;s building in his home.
            The learning process involved in such an undertaking not only serves
            as a spectacular coding project (he wrote the code by himself for
            this entire website), but serves as a concrete first step towards
            writing a book called &quot;The Agile Diner.&quot;
          </p>
        </div>
        <div className={classes.paragraph}>
          <p className={classes.paragraph}>
            The entire project of both building the website and in-home restaurt
            was organized using a project-management framework known as
            &quot;Scrum&quot;. As both a Professional Scrum Master and proud
            Front-End Developer, Morgan is most pleased to present this incrment
            of work as a birthday present for Patron Number 1, Calisama!
          </p>
          <p className={classes.paragraph}>
            Cali, you are the Prime Mover of my new career. I can&apos;t tell
            you how much I love this new-found form of creative expression, and
            thank you for helping me along what has turned out to be a
            spectacularly LONG journey from my first ever create-react-app to a
            freakin full-stack Next.js RESTAURANT in our home. Looking forward
            to celebrating all of life&apos;s increments...over lots of good
            food!
          </p>
        </div>

        <Button link={"/"} onClick={handleClick} className={classes.button}>
          Return to Menu
        </Button>
      </section>
    </Card>
  );
};

export default AboutDetail;
