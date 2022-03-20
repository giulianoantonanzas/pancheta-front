import useResponsive, { BREAKPOINTS } from "hooks/useResponsive";
import NavbarMainDesktop from "./NavbarMainDesktop";
import NavbarMainMobile from "./NavbarMainMobile";

const NavbarMain = () => {
  const isDesktop = useResponsive(BREAKPOINTS.DESKTOP);

  if (isDesktop) {
    return <NavbarMainDesktop />;
  }
  return <NavbarMainMobile />;
};
export default NavbarMain;
