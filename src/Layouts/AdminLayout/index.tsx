import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../Context/LoginContext/useLoginContext";
import Styles from "./../styles.module.scss";
import NavbarAdmin from "./NavbarAdmin";

const AdminLayout = () => {
  const { user } = useUser();
  if (user?.token) {
    return (
      <div className={`${Styles.layOutDisplay}`}>
        <NavbarAdmin />
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to='/login' />;
  }
};

export default AdminLayout;
