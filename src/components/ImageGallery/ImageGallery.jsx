import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={style.galleryList}>
      {images.map((image) => {
        return (
          <li
            className={style.galleryItem}
            key={image.id}
          >
            <ImageCard image={image} onOpenModal={onOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
