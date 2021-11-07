import { FaSearchLocation } from "react-icons/fa";
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <FaSearchLocation color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
