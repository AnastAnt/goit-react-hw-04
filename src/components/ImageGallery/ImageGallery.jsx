import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images &&
        images.map((image) => (
          <li key={image.id} className={styles.galleryItem}>
            <ImageCard image={image} />
          </li>
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
