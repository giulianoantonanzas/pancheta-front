import { FC } from "react";
import { Product } from "../../types/Product";
import ProductCard from "../ProductCard";

const ProductList: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      {products.map(product => {
        <ProductCard {...product} />;
      })}
    </div>
  );
};

export default ProductList;
