import ProductCard from "Components/ProductCard";
import useProduct from "./useProducts";
import Style from "./style.module.scss";

const Products = () => {
  const { featchMore, products, handleChangeFilter, handleFilter, filter } =
    useProduct();

  return (
    <div className='w-100 mt-5 container'>
      <h2>Conoce todos nuestros productos</h2>
      <div className='d-flex gap-3 mt-5 align-items-center'>
        <input
          onChange={handleChangeFilter}
          value={filter}
          className='form-control'
          type='text'
          name='filter'
          id='filter'
          placeholder='muñeco de dinosaurio'
        />
        <button
          onClick={handleFilter}
          type='button'
          className='btn btn-primary text-white'>
          Buscar
        </button>
      </div>

      <div className={Style.productList}>
        {products?.map(product => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>

      <div className='d-flex justify-content-center align-content-center my-5'>
        <button
          onClick={featchMore}
          type='button'
          className='btn btn-primary text-white'>
          Ver Mas
        </button>
      </div>
    </div>
  );
};

export default Products;
