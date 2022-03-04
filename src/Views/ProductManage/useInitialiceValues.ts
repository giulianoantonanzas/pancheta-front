import { useEffect, useMemo, useState } from "react";
import useProduct from "../../hooks/useProduct";
import { ProductFormPost } from "../../types/Product";

/**
 * @author Giuliano Antonanzas
 * @description reviso si es que voy a editar un producto. Un producto va a ser editado cuando me llege tal como id.
 */
const useInitialiceValues = () => {
  const { product } = useProduct();
  const [initialProduct, setInitialProduct] = useState<ProductFormPost>({
    name: "",
    description: "",
    stock: 0,
    price: 0,
    files: []
  });
  const [productEditId, setProductEditId] = useState<number | null>(null);

  useEffect(() => {
    if (product) {
      setInitialProduct(product);
      setProductEditId(product.id);
    }
  }, [product]);

  return useMemo(() => ({ initialProduct, productEditId }), [initialProduct]);
};

export default useInitialiceValues;
