import { useMemo, useState } from "react";
import { Product } from "../../types/Product";
import Style from "./style.module.scss";

const useCart = () => {
  const [hasOpenCart, setHasOpenCart] = useState(false);
  const [collapsableStyle, setCollapsableStyle] = useState(Style.isInactive);

  useMemo(() => {
    if (hasOpenCart) {
      setCollapsableStyle(Style.isActive);
    } else {
      setCollapsableStyle("");
      setTimeout(() => setCollapsableStyle("invisible"), 100);
    }
  }, [hasOpenCart]);

  const handleSwitchOpen = () => {
    setHasOpenCart(prev => !prev);
  };

  const calculeTotalPrice = (products: Product[]) => {
    let total = 0;
    products.forEach(product => {
      total += product.price || 0;
    });

    return total;
  };

  return { hasOpenCart, handleSwitchOpen, collapsableStyle, calculeTotalPrice };
};

export default useCart;
