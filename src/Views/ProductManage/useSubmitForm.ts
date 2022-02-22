import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useApiPost from "../../hooks/useApiPost";
import { Product, ProductFormPost } from "../../types/Product";

const useSubmitForm = () => {
  const apiPost = useApiPost();
  const navigate = useNavigate();

  return useCallback(async (productForm: ProductFormPost) => {
    const formData = new FormData();
    formData.append("name", productForm.name);
    productForm?.description &&
      formData.append("description", productForm.description);
    productForm?.price &&
      formData.append("price", productForm.price.toString());
    productForm?.stock &&
      formData.append("stock", productForm.stock.toString());
    productForm?.files &&
      productForm.files.map(file => {
        formData.append("files", file);
      });

    const response = await apiPost<Product>("/products", formData);

    if (typeof response !== "string") {
      navigate("/admin");
    }
  }, []);
};

export default useSubmitForm;
