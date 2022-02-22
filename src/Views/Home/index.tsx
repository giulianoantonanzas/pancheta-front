import { Fragment } from "react";
import HeroPresentation from "./HeroPresentation";
import PanchetaHistory from "./PanchetaHistory";

const Home = () => {
  return (
    <Fragment>
      <HeroPresentation />
      <PanchetaHistory />
    </Fragment>
  );
};

export default Home;
