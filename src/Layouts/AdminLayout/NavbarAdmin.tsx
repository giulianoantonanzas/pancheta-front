import { Link } from "react-router-dom";
import Style from "Layouts/MainLayout/NavbarMain/NavbarMainDesktop/styles.module.scss";
import usePositionPage from "Context/usePositionPage";

const NavbarAdmin = () => {
  const { position } = usePositionPage();

  return (
    <nav className={`${Style.navbar} ${position ? Style.increaseNavbar : ""}`}>
      <ul className='container'>
        <li>
          <Link to='/admin'>Productos</Link>
        </li>
        <li>
          <Link to='/admin/payments'>Pagos</Link>
        </li>
        <li>
          <Link to='/admin/instagram'>Instagram</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};
export default NavbarAdmin;
