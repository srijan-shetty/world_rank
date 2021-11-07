import { useState } from "react";
import Image from "next/image";
import CountriesTable from "../component/CountriesTable/CountriesTable";
import Layout from "../component/layout/Layout";
import SearchInput from "../component/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  console.log(countries.data);
  const [keyword, setKeyword] = useState("");

  const fileteredcountries = countries.data.filter(
    (country) =>
      country.country.toLowerCase().includes(keyword) ||
      country.city.toLowerCase().includes(keyword)
  );
  return (
    <Layout>
      <div className={styles.counts}>
        Found {countries.data.length} countries
      </div>
      <SearchInput
        placeholder="Filetr by Name, Region or SubRegion"
        onChange={(event) => setKeyword(event.target.value)}
      />
      <CountriesTable countries={fileteredcountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // const res = await fetch("https://api.first.org/data/v1/countries");
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities"
  );
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
