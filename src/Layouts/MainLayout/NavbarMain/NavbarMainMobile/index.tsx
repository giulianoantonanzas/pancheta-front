import MenuMobile from "assets/images/menu-mobile.svg";
import Cart from "Components/Cart";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Style from "./styles.module.scss";
import PanchetaLogo from "assets/images/Pancheta logo texto.png";

const NavbarMainMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [dnone, setDnone] = useState(true);

  const handleSwitchOpenMenu = () => {
    if (dnone) {
      setDnone(prev => !prev);
      setTimeout(() => setOpenMenu(prev => !prev), 200);
    } else {
      setTimeout(() => setDnone(prev => !prev), 300);
      setOpenMenu(prev => !prev);
    }
  };

  return (
    <Fragment>
      <nav className={Style.navbar}>
        <img onClick={handleSwitchOpenMenu} src={MenuMobile} alt={"menu"} />
        <Cart />
      </nav>
      <div
        className={`${Style.navbarLeft} ${openMenu ? Style.activeMenu : ""} ${
          dnone ? "d-none" : ""
        }`}>
        <div>
          <Link onClick={handleSwitchOpenMenu} to='/'>
            <img src={PanchetaLogo} />
          </Link>
          <Link onClick={handleSwitchOpenMenu} to='/productos'>
            Productos
          </Link>
          <Link onClick={handleSwitchOpenMenu} to='/sobre-mi'>
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
