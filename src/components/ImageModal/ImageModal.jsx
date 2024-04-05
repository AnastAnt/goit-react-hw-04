import PropTypes from "prop-types"; 
import Modal from "react-modal"; 
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, closeModal, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
        overlay: {},
      }}
      className={styles.modalContent} 
      overlayClassName={styles.modalOverlay} 
    >
      <div>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.image} 
        />
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <p>Description: {image.description}</p>
      </div>
    </Modal>
  );
};


ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageModal;
