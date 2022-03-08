import Carrousel from "../../Components/Carrousel";
import useCartShopContext from "../../Context/CartShopContext";
import useProduct from "../../hooks/useProduct";
import Style from "./style.module.scss";

const Product = () => {
  const { product } = useProduct();
  const { handleRemoveProduct, handleAddProduct, isInCart } =
    useCartShopContext();

  return (
    <div className='py-5 container'>
      {product && (
        <div className={Style.productContainer}>
          <div className='px-5'>
            {product.ProductImages && (
              <Carrousel images={product.ProductImages} />
            )}
          </div>
          <div className='w-50 h-100'>
            <h2>{product.name}</h2>
            <p>{product?.description}</p>
            <div className='mt-5'>
              {product?.price && (
                <h1 className='price'>
                  ${new Intl.NumberFormat("es-AR").format(product.price)}
                </h1>
              )}
              {isInCart(product) ? (
                <button
                  onClick={() => handleRemoveProduct(product)}
                  className='btn btn-outline-primary rounded'>
                  Remover del carrito
                </button>
              ) : (
                <button
                  onClick={() => handleAddProduct(product)}
                  className='btn btn-primary text-white rounded'>
                  Agregar al carrito
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
