/* eslint-disable */
import { useCallback } from "react";
import { MERCADO_PAGO_PUBLIC_KEY } from "../../constants";

const useMercadoPago = () => {
  const script = document.createElement("script");
  script.src = "https://sdk.mercadopago.com/js/v2";
  script.async = true;
  document.body.appendChild(script);

  /*@ts-ignore*/
  const mp = new MercadoPago(MERCADO_PAGO_PUBLIC_KEY, {
    locale: "es-AR"
  });

  const openCheckout = useCallback(
    async (idPreference: string) => {
      await mp.checkout({
        preference: {
          id: idPreference
        },
        render: {
          container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
          label: "Pagar" // Cambia el texto del botón de pago (opcional)
        },
        theme: {
          headerColor: "#ef6b52",
          elementsColor: "#ef6b52"
        },
        autoOpen: true
      });
    },
    [mp]
  );

  return { openCheckout };
};

export default useMercadoPago;
