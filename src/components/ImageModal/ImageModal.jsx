import Modal from "react-modal";
import style from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ modalImg, modalIsOpen, onCloseModal }) => {
  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        className={style.modalContainer}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        <img src={modalImg} className={style.imgModal}></img>
      </Modal>
  );
};

export default ImageModal;
