import Style from "./styles.module.scss";
import instagramIcon from "./../../../assets/images/instagram.svg";

const FooterMain = () => {
  return (
    <footer className={Style.footer}>
      <div className='container py-4'>
        <h4 className='m-0'>Contactos</h4>
        <a
          className='d-flex gap-1'
          target={"_blank"}
          rel='noreferrer'
          href={"https://www.instagram.com/pancheta.mc/"}>
          <img width={24} height={24} src={instagramIcon} alt='instagram' />
          <p>pancheta.mc</p>
        </a>
        <p className='mt-4 text-center'>
          Copyright © 2022 Giuliano Antonanzas. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
