import { useReducer } from "react";
import reducerProduct from "./reducerProduct";

const useReducerProduct = () => {
  const [productForm, dispatch] = useReducer(reducerProduct, {
    name: "",
    description: "",
    stock: 0
  });

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

  return {
    productForm,
    handleChangeName,
    handleChangeDescription,
    handleChangeStock,
    handleChangePrice,
    handleChangeImage,
    handleRmoveImage
  };
};

export default useReducerProduct;
