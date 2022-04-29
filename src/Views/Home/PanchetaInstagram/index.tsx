import Style from "./style.module.scss";
import usePanchetaInstagram from "./usePanchetaInstagram";

const PanchetaInstagram = () => {
  const { instagramPosts } = usePanchetaInstagram();
  if (instagramPosts && instagramPosts?.length > 0) {
    return (
      <div className={`${Style.panchetaContainer} container`}>
        <h2>Mantente al dia con las publicaciones de Pacheta</h2>
        <div className={Style.instagramPostContainer}>
          {instagramPosts?.map(instagramPost => (
            <iframe key={instagramPost.id} src={`${instagramPost.url}embed`} />
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default PanchetaInstagram;
