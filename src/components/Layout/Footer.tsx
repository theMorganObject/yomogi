import classes from './Footer.module.css';

function Footer() {
  const curYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p className={classes.footerText}>
        © {curYear} Morgan O&apos;Shaughnessey <br />
        | Original Design | <br />
        Built with React, Next.js, Node.js, and Firebase
      </p>
      <a
        className={classes.link}
        href='https://www.theMorganObject.dev'
        target='_blank'
        rel='noopener noreferrer'
      >
        www.theMorganObject.dev
      </a>
    </footer>
  );
}

export default Footer;
