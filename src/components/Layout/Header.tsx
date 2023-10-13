import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import YoMogi from "../UI/YoMogiIcon";

interface HeaderProps {
  onShowCart: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={classes.header}>
      <YoMogi />
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
