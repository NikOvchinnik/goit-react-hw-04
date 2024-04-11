import style from "./ImageCard.module.css";

const ImageCard = ({ image, onOpenModal }) => {
  return (
    <div className={style.cardItem}>
      <div>
        <img
          className={style.cardImg}
          src={image.urls.small}
          alt={image.alt_description}
          onClick={() => {
            onOpenModal(image.urls.regular);
          }}
        />
      </div>
      <div className={style.cardText}>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
