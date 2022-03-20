import { FC } from "react";
import { API_URL_FILE } from "../../constants";
import { Product } from "../../types/Product";
import RoundedIcon from "../RoundedIcon";
import Style from "./style.module.scss";
import TrashIcon from "./../../assets/images/trash.svg";
import { useNavigate } from "react-router-dom";
import useCartShopContext from "../../Context/CartShopContext";

type CartItemProps = {
  product: Product;
};

const CartItem: FC<CartItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const { handleRemoveProduct } = useCartShopContext();
  return (
    <div
      onClick={() => navigate(`productos/${product.id}`)}
      className={Style.cartProduct}>
      {product.ProductImages && (
        <img src={API_URL_FILE + product.ProductImages[0].path} />
      )}
      <div className='d-flex w-100 flex-column'>
        <p>
          <strong>{product.name}</strong>
        </p>
        {product?.price && (
          <h2>${new Intl.NumberFormat("es-AR").format(product.price)}</h2>
        )}
      </div>
      <RoundedIcon
        medium
        onClick={e => {
          e?.stopPropagation();
          handleRemoveProduct(product);
        }}>
        <img src={TrashIcon} alt='remove' />
      </RoundedIcon>
    </div>
  );
};

export default CartItem;
