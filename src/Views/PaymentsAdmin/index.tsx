import TableAdmin from "Components/TableAdmin";
import usePaymentsAdmin from "./usePaymentsAdmin";

const PaymentsAdmin = () => {
  const { payments } = usePaymentsAdmin();
  console.log(payments);

  return (
    <div className='w-100 border rounded p-4'>
      <h1>Pagos</h1>
      {payments && payments?.length > 0 && <TableAdmin entities={payments} />}
    </div>
  );
};

export default PaymentsAdmin;
