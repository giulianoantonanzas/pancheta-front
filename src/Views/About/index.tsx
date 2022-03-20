import AboutMeIMG from "assets/images/wallpaperImagenOPT2.jpg";
import Style from "./style.module.scss";

const About = () => {
  return (
    <div className={`container ${Style.aboutCointainer}`}>
      <img src={AboutMeIMG} alt='acerca de mi' />
      <div className={Style.description}>
        <h2>
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
