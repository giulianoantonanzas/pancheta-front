import MenuMobile from "assets/images/menu-mobile.svg";
import Cart from "Components/Cart";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Style from "./styles.module.scss";
import PanchetaLogo from "assets/images/Pancheta logo texto.png";

const NavbarMainMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleSwitchOpenMenu = () => {
    setOpenMenu(prev => !prev);
  };

  return (
    <Fragment>
      <nav className={Style.navbar}>
        <img onClick={handleSwitchOpenMenu} src={MenuMobile} alt={"menu"} />
        <Cart />
      </nav>
      <div
        className={`${Style.navbarLeft} ${openMenu ? Style.activeMenu : ""}`}>
        <div>
          <Link onClick={() => setOpenMenu(false)} to='/'>
            <img src={PanchetaLogo} />
          </Link>
          <Link onClick={() => setOpenMenu(false)} to='/productos'>
            Productos
          </Link>
          <Link onClick={() => setOpenMenu(false)} to='/sobre-mi'>
            Acerca de Pancheta
          </Link>
        </div>
      </div>
      {openMenu && (
        <div
          onClick={handleSwitchOpenMenu}
          style={{ background: "#8484846b" }}
          className='back-modal'
        />
      )}
    </Fragment>
  );
};

export default NavbarMainMobile;
