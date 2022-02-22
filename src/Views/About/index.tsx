import AboutMeIMG from "../../assets/images/wallpaperImagenOPT2.jpg";
import Style from "./style.module.scss";

const About = () => {
  return (
    <div className={`container d-flex ${Style.aboutCointainer}`}>
      <div className='w-50'>
        <img src={AboutMeIMG} width='80%' alt='acerca de mi' />
      </div>
      <div className='w-50 d-flex flex-column gap-3'>
        <h2 className='my-5'>
          Soy Marlén. Diseñadora y creadora del mundo mágico de Pancheta.{" "}
        </h2>
        <p>
          Diseños pensados y creados artesanalmente. Los materiales son elegidos
          cuidadosamente por mi. Algunos son nuevos y otros reciclados.
        </p>
        <p>
          Aprender jugando es una experiencia única y saber que hay Panchetas
          por el mundo haciendo feliz a mucha gente, es lo que motiva mi motor
          todos los días.
        </p>

        <p>
          Espero que disfruten de esta experiencia tanto como yo amo diseñar y
          confeccionar las Panchetas.
        </p>
      </div>
    </div>
  );
};

export default About;
