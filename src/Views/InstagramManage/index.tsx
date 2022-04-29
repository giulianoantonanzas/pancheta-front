import useInstagramManage from "./useInstagramManage";
import instagramGuide from "assets/images/instagramGuia.png";

const InstagramManage = () => {
  const { handleChangeInstgramUrl, instagramPostUrl, saveInstagramPostUrl } =
    useInstagramManage();
  return (
    <div className='d-flex'>
      <form className='p-5 m-4 w-50' onSubmit={saveInstagramPostUrl}>
        <label htmlFor='instagramURL' className='form-label'>
          URL publicacion de instagram
        </label>
        <input
          value={instagramPostUrl}
          onChange={handleChangeInstgramUrl}
          name='instagramURL'
          type='text'
          className='form-control'
          placeholder='https://www.instagram.com/p/Cauk5YvgFGk/'
        />
        <button type='submit' className='btn btn-primary text-white p-2 mt-4'>
          Guardar post de instagram
        </button>
      </form>
      <div className='mt-5 w-50'>
        <p>
          <strong>Como obtener esta url?</strong>
          {` no te olvides del "/" al final`}
        </p>
        <img width={500} height={300} src={instagramGuide} />
      </div>
    </div>
  );
};

export default InstagramManage;
