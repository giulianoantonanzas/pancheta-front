import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../types/Product";

export type CartShopContextType = {
  products: Product[];
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (product: Product) => void;
  isInCart: (product: Product) => boolean;
};

const useCartShopContext = () => {
  return useContext(CartShopContext);
};

export const CartShopContext = React.createContext<CartShopContextType>({
  products: [],
  handleAddProduct: product => product,
  handleRemoveProduct: product => product,
  isInCart: () => false
});

export const CardShopContextProider: React.FC = ({ children }) => {
  const [products, setProdutos] = useState<Product[]>(
    (JSON.parse(
      localStorage.getItem("products-pancheta") || "[]"
    ) as Product[]) || []
  );

  useEffect(() => {
    localStorage.setItem("products-pancheta", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product: Product) => {
    if (!products.find(productoCurrent => productoCurrent.id === product.id)) {
      setProdutos(prev => [...prev, product]);
    }
  };
  const handleRemoveProduct = (product: Product) => {
    if (products.find(productoCurrent => productoCurrent.id === product.id)) {
      setProdutos(prev =>
        prev.filter(currentProduct => currentProduct.id !== product.id)
      );
    }
  };

  const isInCart = (product: Product) => {
    if (products.find(productoCurrent => productoCurrent.id === product.id))
      return true;
    return false;
  };

  return (
    <CartShopContext.Provider
      value={{ products, handleAddProduct, handleRemoveProduct, isInCart }}>
      {children}
    </CartShopContext.Provider>
  );
};

export default useCartShopContext;
