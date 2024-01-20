import classes from './AboutDetail.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const handleClick = () => {};

const AboutDetail = () => {
  return (
    <div className={classes.container}>
      <Card>
        <section className={classes.summary}>
          <div className={classes.paragraph}>
            <p>
              Nestled in a small rural neighborhood on Hawaii&apos;s Big Island,
              this private Japanese-Fusion Gastropub operates as a labor of
              love, offering daily healthy and innovative home-cooked meals.
              With a simple wok, a bit of practice, and a commitment to
              organization, the aim is to demonstrate the ease of creating
              restaurant-quality dishes at home affordably.
            </p>
          </div>
          <div className={classes.paragraph}>
            <p>
              The gastropub&apos;s name, Yomogi, has an amusing origin. It was
              during a routine visit to KTA Superstore in Hilo that chef Morgan
              O&apos;Shaughnessey, while learning Japanese, discovered a mochi
              named Yomogi. The coincidence of it sharing letters with his name
              sparked the inspiration for the gastropub&apos;s name.
            </p>
          </div>
          <div className={classes.paragraph}>
            <p>
              Morgan, combining his three years of wok chef training, extensive
              homebrew experience, and a passion for culinary arts, developed
              this food order app alongside the construction of his in-home
              restaurant. This endeavor doubles as a coding project and a step
              towards his goal of writing &ldquo;The Agile Diner,&ldquo; a
              testament to his journey and expertise in both culinary and coding
              fields.
            </p>
          </div>
          <div className={classes.paragraph}>
            <p>
              Managing the dual project of website development and restaurant
              creation, Morgan, a Professional Scrum Master and Front-End
              Developer, adopted the &ldquo;Scrum&ldquo; framework. He proudly
              offers this website, a labor of love and a symbol of his
              dedication, as a birthday gift to his first patron, Calisama.
            </p>
          </div>

          <Button link={'/'} onClick={handleClick} className={classes.button}>
            Return to Menu
          </Button>
        </section>
      </Card>
    </div>
  );
};

export default AboutDetail;
