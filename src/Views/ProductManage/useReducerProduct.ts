import { useEffect, useMemo, useReducer } from "react";
import reducerProduct from "./reducerProduct";
import useInitialiceValues from "./useInitialiceValues";

const useReducerProduct = () => {
  const { initialProduct, productEditId } = useInitialiceValues();
  const [productForm, dispatch] = useReducer(reducerProduct, initialProduct);

  useEffect(() => {
    //inicialiso el productForm si es que esta editando ,para ello reviso si tengo algo en initial product
    if (productEditId) {
      dispatch({ type: "allProduct", payload: initialProduct });
    }
  }, [initialProduct]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "name", payload: e.target.value });
  };
  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: "description", payload: e.target.value });
  };
  const handleChangeStock = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "stock", payload: e.target.value });
  };
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "price", payload: e.target.value });
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const productFormImages = productForm.files || [];
    if (e && e.target && e.target.files && e.target.files[0]) {
      productFormImages?.push(e.target.files[0]);
    }
    dispatch({ type: "files", payload: productFormImages });
  };

  const handleRmoveImage = (index: number) => {
    const productFormImages = productForm.files || [];
    productFormImages.splice(index, 1);
    dispatch({ type: "files", payload: productFormImages });
  };

  const handleRemoveSavedImage = (index: number) => {
    const productFormImages = productForm.ProductImages || [];
    productFormImages.splice(index, 1);
    dispatch({ type: "ProductImages", payload: productFormImages });
  };

  return useMemo(
    () => ({
      productForm,
      handleChangeName,
      handleChangeDescription,
      handleChangeStock,
      handleChangePrice,
      handleChangeImage,
      handleRmoveImage,
      productEditId,
      handleRemoveSavedImage
    }),
    [productForm, initialProduct]
  );
};

export default useReducerProduct;
