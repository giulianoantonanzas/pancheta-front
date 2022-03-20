import { useCallback, useReducer } from "react";
import useCartShopContext from "Context/CartShopContext";
import useApiPost from "hooks/useApiPost";
import { CostumerPayType } from "types/CostumerPayType";
import { MercadoPagoShopType } from "types/MercadoPagoShop";
import {
  initialCustomerData,
  costumerDataReducer
} from "./costumerDataReducer";

const usePayment = () => {
  const { products } = useCartShopContext();
  const ApiGet = useApiPost();

  const [costumerData, dispatch] = useReducer(
    costumerDataReducer,
    initialCustomerData
  );

  const sendPay = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const mercadoPagoShop = await ApiGet<MercadoPagoShopType>(
        "/payment",
        { products: products, userInfo: costumerData },
        "/generatePayment"
      );

      if (mercadoPagoShop?.sandbox_init_point) {
        window.open(mercadoPagoShop.sandbox_init_point);
      }
    },
    [products, costumerData]
  );

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: keyof CostumerPayType
  ) => {
    dispatch({ type: type, payload: e.target.value });
  };

  const handleClearVlaue = () => {
    dispatch({ type: "clear", payload: initialCustomerData });
  };

  return { costumerData, sendPay, handleChangeValue };
};

export default usePayment;
