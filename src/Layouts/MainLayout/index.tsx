import { FC, Fragment, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import usePositionPage from "../../Context/usePositionPage";
import NavbarMain from "./NavbarMain";
import Styles from "./../styles.module.scss";
import FooterMain from "./FooterMain";

const MainLayout: FC = () => {
  const location = useLocation();
  const { setPoistion } = usePositionPage();
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    setPoistion(e.currentTarget.scrollTop);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <NavbarMain />
      <div onScroll={handleScroll} className={Styles.layOutDisplay}>
        <Outlet />
        <FooterMain />
      </div>
    </Fragment>
  );
};

export default MainLayout;
