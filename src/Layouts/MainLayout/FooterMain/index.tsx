import Style from "./styles.module.scss";
import instagramIcon from "assets/images/instagram.svg";
import whatsAppIcon from "assets/images/whatsapp.svg";

const FooterMain = () => {
  return (
    <footer className={Style.footer}>
      <div className='container pt-4 pb-2'>
        <h4 className='text-center'>
          <u>Contactos</u>
        </h4>
        <div className='d-flex justify-content-center align-items-center gap-4'>
          <a
            target={"_blank"}
            rel='noreferrer'
            href={"https://www.instagram.com/_pancheta.mc/"}>
            <img width={34} height={34} src={instagramIcon} alt='instagram' />
          </a>
          <a
            target={"_blank"}
            rel='noreferrer'
            href={
              "https://web.whatsapp.com/send?phone=+5493425680382&text&app_absent=0"
            }>
            <img width={34} height={34} src={whatsAppIcon} alt='whatsApp' />
          </a>
        </div>
        <p className='mt-4 text-center'>
          Copyright © {`${new Date().getFullYear()}`} Pancheta - Pagina
          realizada por Giuliano Antonanzas. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
