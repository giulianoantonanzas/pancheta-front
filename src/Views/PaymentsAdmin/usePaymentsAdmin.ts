import useApiGet from "hooks/useApiGet";
import { useMemo, useState } from "react";
import { MercadoPagoPaymentType, Payer } from "types/MecadoPagoPayment";

type PaginatePaymentType = { limit: number; offset: number; total: number };

type PaymentResultType = {
  response: { results: MercadoPagoPaymentType[]; paging: PaginatePaymentType };
  pagination: { limit: PaginatePaymentType };
};

const usePaymentsAdmin = () => {
  const [payments, setPayments] = useState<Payer[]>();
  const apiGet = useApiGet();
  useMemo(async () => {
    const response = await apiGet<PaymentResultType>("/payments");
    console.log(response);

    if (response)
      setPayments(
        response.response.results.map(payment => {
          return {
            ...payment.payer,
            identification: undefined
          };
        })
      );
  }, []);

  return { payments };
};

export default usePaymentsAdmin;
