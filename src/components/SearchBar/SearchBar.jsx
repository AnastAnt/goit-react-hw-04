import PropTypes from "prop-types"; 

import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={styles.header}>
      {" "}

      <form className={styles.form} onSubmit={onSubmit}>
        {" "}
       
        <input
          className={styles.input} 
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.button} type="submit">
          Search
        </button>{" "}
       
      </form>
    </header>
  );
};


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};

export default SearchBar;
