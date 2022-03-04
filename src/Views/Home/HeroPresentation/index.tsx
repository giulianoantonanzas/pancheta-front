import Style from "./style.module.scss";
import CorazonIMG from "../../../assets/images/corazon rosa.png";
import { Link } from "react-router-dom";

const HeroPresentation = () => {
  return (
    <div className={Style.heroContainer}>
      <div className='container'>
        <div className='d-flex align-items-center gap-3'>
          <h1>
            <strong>Un mundo feliz </strong>
          </h1>
          <img src={CorazonIMG} alt='corazon' />
        </div>
        <div className='d-flex flex-column gap-1'>
          <h4>Muñecos artesanales</h4>
          <Link to='/productos'>
            <button type='button' className='btn btn-outline-primary'>
              Ver listado
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPresentation;
