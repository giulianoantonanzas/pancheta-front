import Carrousel from "../../Components/Carrousel";
import useProduct from "./useProduct";

const Product = () => {
  const { product } = useProduct();
  return (
    <div className='py-5 container'>
      {product && (
        <div className='d-flex'>
          <div className='w-50 px-5'>
            {product.ProductImages && (
              <Carrousel images={product.ProductImages} />
            )}
          </div>
          <div className='w-50'>
            <h2>{product.name}</h2>
            <p>{product?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
