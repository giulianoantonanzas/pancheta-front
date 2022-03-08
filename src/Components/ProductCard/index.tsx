import { FC } from "react";
import { API_URL_FILE } from "../../constants";
import { Product } from "../../types/Product";
import Styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import AddCart from "../AddCart";
import useCartShopContext from "../../Context/CartShopContext";

const ProductCard: FC<Product> = product => {
  const { id, name, description, ProductImages, price } = product;
  const navigate = useNavigate();
  const { handleAddProduct } = useCartShopContext();

  return (
    <div
      onClick={() => navigate(`${id}`)}
      className={Styles.productCardContainer}>
      {ProductImages && ProductImages?.length > 0 && (
        <img
          src={API_URL_FILE + ProductImages[ProductImages.length - 1].path}
          alt='demo producto'
        />
      )}
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className='d-flex mt-auto align-items-center justify-content-end justify-content-between'>
          <div className='mt-auto d-flex flex-column gap-0'>
            {price && (
              <h2 className='price'>
                ${new Intl.NumberFormat("es-AR").format(price)}
              </h2>
            )}
          </div>
          <AddCart
            onClick={e => {
              e?.stopPropagation();
              handleAddProduct(product);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
