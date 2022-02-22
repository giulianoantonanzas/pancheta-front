import { FC, useState } from "react";
import { API_URL_FILE } from "../../constants";
import { ProductImages } from "../../types/Product";
import Style from "./style.module.scss";

const Carrousel: FC<{ images: ProductImages[] }> = ({ images }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={Style.imageContainer}>
      <div>
        <img
          className={Style.selected}
          src={API_URL_FILE + images[selected].path}
          alt='demo'
        />
      </div>

      <div className={Style.carrouseLContainer}>
        {images.map((image, index) => (
          <img
            onClick={() => setSelected(index)}
            className={Style.image}
            key={image.id}
            src={API_URL_FILE + image.path}
            alt={"demo"}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
