import useCartShopContext from "../../Context/CartShopContext";
import AddCart from "../AddCart";
import Style from "./style.module.scss";
import useCart from "./useCart";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { products } = useCartShopContext();
  const { handleSwitchOpen, collapsableStyle, calculeTotalPrice } = useCart();
  const [moveCount, setMoveCount] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setMoveCount(true);
      setTimeout(() => setMoveCount(false), 1000);
    }
  }, [products]);

  return (
    <>
      <div className={Style.cartContainer}>
        <AddCart onClick={handleSwitchOpen}>
          <div
            className={`${Style.countProducts} ${
              moveCount ? Style.moveCount : ""
            }`}>
            {products.length}
          </div>
        </AddCart>
      </div>
      <div className={Style.collapsible}>
        <div className={collapsableStyle}>
          {products?.length > 0 ? (
            <>
              <div className={Style.collapsableContent}>
                {products?.map(product => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
              <div className={Style.payment}>
                <h2>
                  Total: $
                  {new Intl.NumberFormat("es-AR").format(
                    calculeTotalPrice(products)
                  )}
                </h2>
                <button className='btn btn-outline-primary'>
                  Realizar compra
                </button>
              </div>
            </>
          ) : (
            <p>Aquí verás los productos del carrito.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
