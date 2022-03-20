import useCartShopContext from "../../Context/CartShopContext";
import AddCart from "../AddCart";
import Style from "./style.module.scss";
import useCart from "./useCart";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products } = useCartShopContext();
  const { handleSwitchOpen, collapsableStyle, calculeTotalPrice, hasOpenCart } =
    useCart();
  const [moveCount, setMoveCount] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setMoveCount(true);
      setTimeout(() => setMoveCount(false), 1000);
    }
  }, [products]);

  return (
    <div>
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
                <Link onClick={handleSwitchOpen} to={"payment"}>
                  <button className='btn btn-outline-primary'>
                    Realizar compra
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <p className='p-4'>Aquí verás los productos del carrito.</p>
          )}
        </div>
      </div>
      {hasOpenCart && <div className='back-modal' onClick={handleSwitchOpen} />}
    </div>
  );
};

export default Cart;
