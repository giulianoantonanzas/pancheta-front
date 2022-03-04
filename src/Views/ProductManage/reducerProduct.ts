import { ProductFormPost, ProductImages } from "../../types/Product";

const reducerProduct = (
  productForm: ProductFormPost,
  {
    type,
    payload
  }: {
    type: keyof ProductFormPost | "allProduct";
    payload: string | number | File[] | ProductImages[] | ProductFormPost;
  }
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
    case "ProductImages":
      return {
        ...productForm,
        ProductImages: payload as ProductImages[]
      };
    case "allProduct":
      return {
        ...(payload as ProductFormPost)
      };
  }
};

export default reducerProduct;
