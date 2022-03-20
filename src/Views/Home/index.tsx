import { Fragment } from "react";
import HeroPresentation from "./HeroPresentation";
// import PanchetaHistory from "./PanchetaHistory";

const Home = () => {
  return (
    <Fragment>
      <HeroPresentation />
      <div style={{ height: "fit-content" }}>
        {/* <iframe
          height={600}
          src='https://www.instagram.com/pancheta.mc/embed'
        /> */}

        {/* <iframe
          height={600}
          src='https://www.instagram.com/p/Cauk5YvgFGk/embed'
        /> */}
      </div>
      {/* <PanchetaHistory /> */}
    </Fragment>
  );
};

export default Home;
