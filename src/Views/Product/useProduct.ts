import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApiGet from "../../hooks/useApiGet";
import { Product } from "../../types/Product";

/**
 * @author Giuliano Antonanzas
 * @description este hook sirve para retornar los productos segun el id de la ruta.
 * @example const {product} = useProduct()
 */
const useProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const apiGet = useApiGet();
  const navigate = useNavigate();

  useMemo(async () => {
    if (id) {
      const response = await apiGet<Product | null>("/products", `/${id}`);
      if (response) {
        setProduct(response);
      } else {
        navigate("");
      }
    }
  }, [id]);

  return useMemo(() => ({ product }), [product]);
};

export default useProduct;
