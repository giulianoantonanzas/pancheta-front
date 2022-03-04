import useProductList from "./useProductList";
import addIcon from "../../assets/images/plus-circle.svg";
import removeIcon from "../../assets/images/trash.svg";
import editIcon from "../../assets/images/pencil.svg";
import Style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import useRemoveProductModal from "./useRemoveProductModal";

const ProductAdmin = () => {
  const productKeys = ["id", "Name", "Precio", "Stock", "Acciones"];
  const navigate = useNavigate();
  const {
    products,
    paginate,
    currentPage,
    nextPage,
    prevPage,
    filter,
    handleChangeFilter,
    removeProduct
  } = useProductList();
  const { openRemoveProductModal } = useRemoveProductModal();

  return (
    <div className='w-100 border rounded p-4'>
      <h1>Lista de productos</h1>
      <div className='my-5 w-25 d-flex flex-column gap-1'>
        <label htmlFor='filter'>Buscar</label>
        <div className='d-flex gap-2'>
          <input
            onChange={handleChangeFilter}
            value={filter}
            className='form-control'
            type='text'
            name='filter'
            id='filter'
            placeholder='Dinosaurio'
          />
        </div>
      </div>
      <div className='mt-5'>
        {products && products?.length > 0 && (
          <table className={`table ${Style.tableContainer}`}>
            <thead className='table-light'>
              <tr>
                {productKeys.map((key, index) => (
                  <th key={index} scope='col'>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td className='d-flex gap-2'>
                    <img
                      onClick={() => navigate(`products/${product.id}`)}
                      className='pointer'
                      src={editIcon}
                      alt='Editar producto'
                    />
                    <img
                      onClick={async () => {
                        if (product?.id) {
                          openRemoveProductModal(product, () =>
                            removeProduct(product.id as number)
                          );
                        }
                      }}
                      className='pointer'
                      src={removeIcon}
                      alt='Eliminar producto'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className='d-flex justify-content-between mt-4'>
          <Link to='/admin/products/new'>
            <button
              onClick={prevPage}
              type='button'
              className='btn btn-primary text-white'>
              <img
                style={{ filter: "invert(1)" }}
                src={addIcon}
                alt='Agregar producto'
              />{" "}
              Agregar Producto
            </button>
          </Link>

          <div>
            <p>
              Pagina {currentPage} - Total de paginas {paginate.pages} -
              Cantidad de articulos {paginate.total}
            </p>
          </div>

          <div className='d-flex gap-2 '>
            <button
              onClick={prevPage}
              type='button'
              className='btn btn-primary text-white'>
              Pagina previa
            </button>
            <button
              onClick={nextPage}
              type='button'
              className='btn btn-primary text-white'>
              Siguiente pagina
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;
