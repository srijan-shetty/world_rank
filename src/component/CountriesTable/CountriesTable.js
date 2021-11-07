import styles from "./CountriesTable.module.css";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/Io";
import { useState } from "react";
import Link from "next/Link";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  } else if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }
  return countries;
};

const Sortarrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <IoIosArrowDropdownCircle color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <IoIosArrowDropupCircle color="inherit" />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  const orderedcountries = orderBy(countries, value, direction);

  const switchdirections = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else setDirection(null);
  };

  const setvalueanddirection = (value) => {
    switchdirections();
    setValue(value);
  };
  return (
    <div>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setvalueanddirection("country")}
        >
          <div>Country</div>
          <Sortarrow direction={direction} />
        </button>
        <button
          className={styles.heading_city}
          onClick={() => setvalueanddirection("city")}
        >
          <div>City</div>
          <Sortarrow direction={direction} />
        </button>
        <button
          className={styles.heading_population}
          onClick={() => setvalueanddirection("populationCounts[0].value")}
        >
          <div>Population</div>
          <Sortarrow direction={direction} />
        </button>
      </div>
      {orderedcountries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <Link href={`/country/${country.city}`}>
          <div className={styles.row}>
            <div className={styles.name}>{country.country}</div>
            <div className={styles.city}>{country.city}</div>
            <div className={styles.name}>
              {country.populationCounts[0].value}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesTable;
