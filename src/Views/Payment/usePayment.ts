import { useCallback, useReducer } from "react";
import useCartShopContext from "Context/CartShopContext";
import useApiPost from "hooks/useApiPost";
import { CostumerPayType } from "types/CostumerPayType";
import { MercadoPagoShopType } from "types/MercadoPagoShop";
import {
  initialCustomerData,
  costumerDataReducer
} from "./costumerDataReducer";
import useMercadoPago from "./useMercadoPago";

const usePayment = () => {
  const { products } = useCartShopContext();
  const apiGet = useApiPost();
  const [costumerData, dispatch] = useReducer(
    costumerDataReducer,
    initialCustomerData
  );
  const { openCheckout } = useMercadoPago();

  const sendPay = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const mercadopagoShop = await apiGet<MercadoPagoShopType>(
        "/payments",
        { products: products, userInfo: costumerData },
        "/generatePayment"
      );

      if (mercadopagoShop) {
        openCheckout(mercadopagoShop.id);
      }

      // if (mercadoPagoShop?.init_point) {
      //   window.open(mercadoPagoShop.init_point); //cambiar por init_point
      // handleClearVlaue()
      // }
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
