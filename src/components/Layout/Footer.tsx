import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.footerText}>© 2023 Morgan O&apos;Shaughnessey</p>
      <a
        className={classes.link}
        href="https://www.theMorganObject.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.theMorganObject.dev
      </a>
    </footer>
  );
}

export default Footer;
