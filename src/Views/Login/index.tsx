import { Navigate } from "react-router-dom";
import useUser from "../../Context/LoginContext/useLoginContext";
import Style from "./style.module.scss";
import useLogin from "./useLogin";

const Login = () => {
  const { user } = useUser();
  const { formData, handleChangePassword, handleChangeUsername, handleSubmit } =
    useLogin();

  if (!user?.token) {
    return (
      <div className={Style.loginContainer}>
        <form
          className={`d-flex flex-column gap-3 rounded p-4 ${Style.formContainer}`}
          onSubmit={handleSubmit}>
          <div className={Style.inputContainer}>
            <label htmlFor='username'>Nombre de usuario</label>
            <input
              onChange={handleChangeUsername}
              value={formData?.username || ""}
              className='form-control'
              type='text'
              name='username'
              id='username'
              placeholder='pancheta123'
            />
          </div>
          <div className={Style.inputContainer}>
            <label htmlFor='password'>Contraseña</label>
            <input
              onChange={handleChangePassword}
              value={formData?.password || ""}
              className='form-control'
              type='password'
              name='password'
              id='password'
              placeholder='******'
            />
          </div>

          <button type='submit' className='btn btn-primary text-white'>
            Login
          </button>
        </form>
      </div>
    );
  } else {
    return <Navigate to='/admin' />;
  }
};

export default Login;
