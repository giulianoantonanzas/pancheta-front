import { ProductFormPost } from "../../types/Product";

const reducerProduct = (
  productForm: ProductFormPost,
  {
    type,
    payload
  }: { type: keyof ProductFormPost; payload: string | number | File[] }
) => {
  switch (type) {
    case "name":
      return {
        ...productForm,
        name: payload as string
      };
    case "description":
      return {
        ...productForm,
        description: payload as string
      };
    case "price":
      return {
        ...productForm,
        price: payload as number
      };
    case "stock":
      return {
        ...productForm,
        stock: payload as number
      };

    case "files":
      return {
        ...productForm,
        files: payload as File[]
      };
    default:
      return {
        ...productForm,
        [type]: payload
      };
  }
};

export default reducerProduct;
