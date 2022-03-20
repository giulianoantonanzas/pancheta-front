import { useNavigate } from "react-router-dom";
import usePayment from "./usePayment";

const Payment = () => {
  const { costumerData, sendPay, handleChangeValue } = usePayment();
  const navigate = useNavigate();

  return (
    <div className='my-5 container'>
      <h2>Ingrese sus datos</h2>
      <p className='my-4'>
        <strong>
          Antes de ir al formulario de pago, necesito tu informacion para
          realizar el pedido. Luego podras realizar el pago a travez de Mercado
          Pago. En caso que no manejes mercado pago, contactarme por WhatsApp
          asi podemos coordinar el pago por otros medios.
        </strong>
      </p>
      <form onSubmit={sendPay} className='py-4 d-flex flex-column gap-3'>
        <div className='form-group'>
          <label htmlFor='firtsName'>Nombre</label>
          <input
            onChange={e => handleChangeValue(e, "firstName")}
            value={costumerData.firstName}
            className='form-control'
            required
            type='text'
            name='firtsName'
            id='firtsName'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Apellido</label>
          <input
            value={costumerData.lastName}
            onChange={e => handleChangeValue(e, "lastName")}
            className='form-control'
            required
            type='text'
            name='lastName'
            id='lastName'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            value={costumerData.email}
            onChange={e => handleChangeValue(e, "email")}
            className='form-control'
            required
            type='email'
            name='email'
            id='email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='number'>Celular o WhatsApp</label>
          <input
            value={costumerData.number}
            onChange={e => handleChangeValue(e, "number")}
            className='form-control'
            required
            type='text'
            name='number'
            id='number'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='locality'>Localidad</label>
          <input
            value={costumerData.locality}
            onChange={e => handleChangeValue(e, "locality")}
            className='form-control'
            required
            type='text'
            name='locality'
            id='locality'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>Ciudad</label>
          <input
            value={costumerData.city}
            onChange={e => handleChangeValue(e, "city")}
            className='form-control'
            required
            type='text'
            name='city'
            id='city'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Calle</label>
          <input
            value={costumerData.address}
            onChange={e => handleChangeValue(e, "address")}
            className='form-control'
            required
            type='text'
            name='address'
            id='address'
          />
        </div>

        <div className='d-flex gap-4'>
          <button type='submit' className='btn btn-primary text-white mt-4'>
            Realizar Compra
          </button>
          <button
            type='button'
            onClick={() => navigate(-1)} //go back
            className='btn btn-outline-primary mt-4'>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
