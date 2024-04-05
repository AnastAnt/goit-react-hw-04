import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="image"
      />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }),
    alt_description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageCard;