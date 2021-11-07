import React, { useState } from "react";
import { Row, Col } from "react-bootstrap/Button";
import Layout from "../../component/layout/Layout";
import styles from "./Country.module.css";
import Image from "next/image";

const Country = ({ selectedcountry }) => {
  console.log(selectedcountry);
  return (
    <Layout>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src="/ind.jpg" alt="India" width="700" height="300" />
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          fontWeight: "bolder",
          fontSize: "200%",
        }}
      >
        <h1>{selectedcountry[0].country}</h1>
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "100%",
        }}
      >
        <div>{selectedcountry[0].city}</div>
      </div>

      <div className="row">
        <div className="col" style={{ border: "2px solid black" }}>
          Population
        </div>
        <div className="col" style={{ border: "2px solid black" }}>
          {selectedcountry[0].populationCounts[0].value}
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  console.log(params);
  const res = await fetch(
    `https://countriesnow.space/api/v0.1/countries/population/cities`
  );
  const countries = await res.json();
  let selectedcountry = await countries.data.filter((country) =>
    country.city.toLowerCase().includes("agra")
  );
  return {
    props: {
      selectedcountry,
    },
  };
};
