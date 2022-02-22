import Style from "./style.module.scss";
import ImageExample1 from "./../../../assets/images/imageExample2.jpg";

const PanchetaHistory = () => {
  return (
    <div className={`${Style.panchetaContainer} container`}>
      <h2 className='text-center'>¿Quien es pancheta?</h2>

      <div className={`${Style.historyItem}`}>
        <div className={Style.imageGradient}>
          <img src={ImageExample1} alt={"primera narracion"} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad
          quam minus labore ab cupiditate voluptas provident quidem ipsa modi
          aliquam tenetur cumque aliquid sit nesciunt perspiciatis, voluptatibus
          impedit! Facere?
        </p>
      </div>

      <div className={`${Style.historyItem}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad
          quam minus labore ab cupiditate voluptas provident quidem ipsa modi
          aliquam tenetur cumque aliquid sit nesciunt perspiciatis, voluptatibus
          impedit! Facere?
        </p>
        <div className={Style.imageGradient}>
          <img src={ImageExample1} alt={"primera narracion"} />
        </div>
      </div>
    </div>
  );
};

export default PanchetaHistory;
