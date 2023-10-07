import Image from "next/image";
import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

interface HeaderProps {
  onShowCart: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>yoMogi</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <Image
          src="/img/meals.jpg"
          alt="A table full of delicious food!"
          height={400}
          width={400}
        />
      </div>
    </Fragment>
  );
};

export default Header;
