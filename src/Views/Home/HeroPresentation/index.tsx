import Style from "./style.module.scss";
import CorazonIMG from "assets/images/corazon rosa.png";
import { Link } from "react-router-dom";

const HeroPresentation = () => {
  return (
    <div className={Style.heroContainer}>
      <div className='container'>
        <div className='d-flex align-items-center gap-3'>
          <h1>
            <strong>Un mundo feliz </strong>
            <img src={CorazonIMG} alt='corazon' />
          </h1>
        </div>
        <div className='d-flex flex-column gap-1'>
          <h4>
            Muñecos artesanales, accesorios,<br></br> juguetes y más
          </h4>
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
