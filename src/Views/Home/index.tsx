import { Fragment } from "react";
import HeroPresentation from "./HeroPresentation";
import PanchetaInstagram from "./PanchetaInstagram";
// import PanchetaHistory from "./PanchetaHistory";

const Home = () => {
  return (
    <Fragment>
      <HeroPresentation />
      <PanchetaInstagram />
    </Fragment>
  );
};

export default Home;
