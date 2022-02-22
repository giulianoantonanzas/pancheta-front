import { useRef } from "react";
import useReducerProduct from "./useReducerProduct";
import Style from "./style.module.scss";
import useSubmitForm from "./useSubmitForm";

const NewProduct = () => {
  const {
    productForm,
    handleChangeDescription,
    handleChangeName,
    handleChangePrice,
    handleChangeStock,
    handleChangeImage,
    handleRmoveImage
  } = useReducerProduct();
  const inputImage = useRef<HTMLInputElement>(null);
  const submitForm = useSubmitForm();

  return (
    <div className='container mt-4'>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitForm(productForm);
        }}
        className='border p-4'>
        <div className='d-flex gap-4'>
          <div className='col'>
            <div className='my-2'>
              <label htmlFor='name' className='form-label'>
                Nombre
              </label>
              <input
                value={productForm.name}
                onChange={handleChangeName}
                type='text'
                className='form-control'
                id='name'
                placeholder='muñeco de pancheta'
              />
            </div>

            <div className='my-2'>
              <label htmlFor='description' className='form-label'>
                Descripcion
              </label>

              <textarea
                value={productForm.description}
                onChange={handleChangeDescription}
                style={{ minHeight: 100 }}
                className='form-control h-auto'
                id='description'
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium excepturi sit ullam enim vel eligendi illo nostrum, illum natus quia ex laborum ipsam, voluptatum officia dolorum pariatur impedit quos.'
              />
            </div>
          </div>

          <div className='col'>
            <div className='my-2'>
              <label htmlFor='price' className='form-label'>
                Precio
              </label>
              <input
                value={productForm?.price}
                onChange={handleChangePrice}
                type='number'
                className='form-control'
                id='price'
                placeholder='3000.99 (3000 pesos ,99 centavos)'
              />
            </div>

            <div className='my-2'>
              <label htmlFor='stocks' className='form-label'>
                Stocks
              </label>
              <input
                value={productForm?.stock}
                onChange={handleChangeStock}
                type='number'
                className='form-control'
                id='stocks'
                placeholder='10'
              />
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <div className='d-flex gap-2'>
            <h4 className='m-0'>Lista de imagenes</h4>

            <input
              ref={inputImage}
              onChange={handleChangeImage}
              className='d-none'
              type='file'
              accept='image/*'
            />

            <button
              onClick={() => inputImage.current?.click()}
              type='button'
              className='btn btn-primary text-white p-3 py-1'>
              Agregar
            </button>
          </div>

          <div className='d-flex gap-4 flex-wrap mt-4'>
            {productForm?.files?.map((image, index) => (
              <div
                key={index}
                onClick={() => handleRmoveImage(index)}
                className={`${Style.imagePreview}`}>
                <img src={URL.createObjectURL(image)} alt='demo view' />
                <p>Quitar imagen</p>
              </div>
            ))}
          </div>
        </div>

        <button
          type='submit'
          className='btn btn-primary text-white p-4 py-2 mt-5 ms-auto d-flex'>
          Crear producto
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
