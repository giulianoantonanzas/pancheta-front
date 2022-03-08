import { Link } from "react-router-dom";
import Style from "./styles.module.scss";
import PanchetaLogo from "./../../../assets/images/Pancheta logo texto.png";
import usePositionPage from "../../../Context/usePositionPage";
import Cart from "../../../Components/Cart";

const NavbarMain = () => {
  const { position } = usePositionPage();

  return (
    <nav className={`${Style.navbar} ${position ? Style.increaseNavbar : ""}`}>
      <ul className='container'>
        <li>
          <Link to='/'>
            <img src={PanchetaLogo} />
          </Link>
        </li>
        <li>
          <Link to='/productos'>Productos</Link>
        </li>
        <li>
          <Link to='/sobre-mi'>Acerca de Pancheta</Link>
        </li>

        <li></li>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
};
export default NavbarMain;
