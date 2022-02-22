import { FC } from "react";
import { API_URL_FILE } from "../../constants";
import { Product } from "../../types/Product";
import Styles from "./style.module.scss";
import CarritoIMG from "./../../assets/images/cart.svg";
import { useNavigate } from "react-router-dom";

const ProductCard: FC<Product> = ({
  id,
  name,
  description,
  price,
  stock,
  ProductImages
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`${id}`)}
      className={Styles.productCardContainer}>
      {ProductImages && ProductImages?.length > 0 && (
        <img src={API_URL_FILE + ProductImages[0].path} alt='demo producto' />
      )}
      <div id='info-product'>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className='d-flex mt-auto justify-content-between'>
          <div className='mt-auto d-flex flex-column gap-0'>
            <p>Precio: ${price} </p>
            <p>Stock actual: {stock}</p>
          </div>

          <div className={Styles.carritoIcon}>
            <img src={CarritoIMG} alt='añadir producto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
