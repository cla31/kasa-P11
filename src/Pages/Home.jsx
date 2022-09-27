import React from "react";
import Header from "../Components/Header";
import "../Style/Home.css";
import logements from "../Data/logements.json";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";
import Banniere from "../Components/Banniere";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Banniere />
      <div className="GalleryLogements">
        {/* Mapping du json */}
        {/* {logements.map((logement, index) => {
          return (
            <Gallery
              key={index}
              title={logement.title}
              cover={logement.cover}
            ></Gallery>
          );
        })} */}
        {/* Mapping avec la destructuration */}
        {logements.map(({ title, cover }, index) => {
          return <Gallery key={index} title={title} cover={cover}></Gallery>;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
